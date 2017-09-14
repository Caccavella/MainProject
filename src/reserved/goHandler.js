function goHandler(event) {
    /* Snip... */
  
    // Add an item to the history log
    history.pushState(data, event.target.textContent, event.target.href);
  
    return event.preventDefault();
  }