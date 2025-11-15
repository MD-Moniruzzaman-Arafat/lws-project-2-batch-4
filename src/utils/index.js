function isValidUrl(value) {
  try {
    const url = new URL(
      value.startsWith('http://') || value.startsWith('https://')
        ? value
        : 'https://' + value
    );

    const domainPattern = /^(?:[a-z0-9-]+\.)+[a-z]{2,}$/i;

    return domainPattern.test(url.hostname);
  } catch {
    return false;
  }
}

function getDomainName(url) {
  try {
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }

    const hostname = new URL(url).hostname;

    const parts = hostname.split('.');

    if (parts.length >= 2) {
      return parts[parts.length - 2];
    }

    return hostname;
  } catch {
    return null;
  }
}

export { getDomainName, isValidUrl };
