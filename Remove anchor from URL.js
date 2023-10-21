function removeUrlAnchor(url) {
    // Use the indexOf() method to find the index of the '#' symbol
    const anchorIndex = url.indexOf('#');
  
    // If the anchor symbol is found, remove everything after it
    if (anchorIndex !== -1) {
      return url.slice(0, anchorIndex);
    }
  
    // If there's no anchor symbol, return the original URL
    return url;
  }  