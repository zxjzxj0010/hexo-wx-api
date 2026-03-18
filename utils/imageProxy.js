const DEFAULT_BLOCKED_IMAGE_HOSTS = ['img.rubbish.press']
const DEFAULT_IMAGE_PROXY_PREFIX = 'https://images.weserv.nl/?url='

function isRemoteUrl(url) {
  return /^https?:\/\//i.test(url) || /^\/\//.test(url)
}

function normalizeUrl(url) {
  if (typeof url !== 'string') return url
  const trimmed = url.trim()
  if (!trimmed) return trimmed
  if (/^\/\//.test(trimmed)) return `https:${trimmed}`
  return trimmed
}

function getHost(url) {
  const matched = String(url).match(/^https?:\/\/([^/?#]+)/i)
  return matched && matched[1] ? matched[1].toLowerCase() : ''
}

function normalizeHosts(hosts) {
  if (!Array.isArray(hosts)) return []
  return hosts.map((item) => String(item || '').toLowerCase().trim()).filter(Boolean)
}

function shouldProxy(url, options = {}) {
  if (typeof url !== 'string') return false
  const normalized = normalizeUrl(url)
  if (!normalized || normalized.startsWith('data:') || normalized.startsWith('cloud://')) return false
  if (!isRemoteUrl(normalized)) return false

  const proxyPrefix = options.imageProxyPrefix || DEFAULT_IMAGE_PROXY_PREFIX
  if (normalized.startsWith(proxyPrefix)) return false

  if (options.forceProxyAllRemote) return true

  const host = getHost(normalized)
  if (!host) return false

  const blockedHosts = [
    ...DEFAULT_BLOCKED_IMAGE_HOSTS,
    ...normalizeHosts(options.proxyImageHosts)
  ]
  return blockedHosts.includes(host)
}

function proxyImageUrl(url, options = {}) {
  const normalized = normalizeUrl(url)
  if (!shouldProxy(normalized, options)) return normalized
  const proxyPrefix = options.imageProxyPrefix || DEFAULT_IMAGE_PROXY_PREFIX
  return `${proxyPrefix}${encodeURIComponent(normalized)}`
}

function proxyImageList(list, key = 'cover', options = {}) {
  if (!Array.isArray(list)) return []
  return list.map((item) => {
    if (!item || typeof item !== 'object') return item
    return {
      ...item,
      [key]: proxyImageUrl(item[key], options)
    }
  })
}

function proxyHtmlImageSrc(html, options = {}) {
  if (typeof html !== 'string' || !html.trim()) return html
  return html.replace(/(<img\b[^>]*\bsrc\s*=\s*["']?)([^"'\s>]+)(["']?[^>]*>)/gi, (match, prefix, src, suffix) => {
    return `${prefix}${proxyImageUrl(src, options)}${suffix}`
  })
}

module.exports = {
  proxyImageUrl,
  proxyImageList,
  proxyHtmlImageSrc
}
