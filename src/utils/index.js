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

export { isValidUrl };
