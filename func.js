export function parallax(elementSelector, speed = 0.025, property = 'translateY') {
  let requestId;

  function updateParallax() {
    let scroll = window.scrollY;
    let viewportWidth = window.innerWidth;

    let adjustedSpeed = speed * (viewportWidth / 100);

    let easeOutOffset = scroll * adjustedSpeed * (1 - Math.exp(-scroll / 300));

    if (scroll <= 1) {
      elementSelector.style.transform = 'none';
    } else {
      elementSelector.style.transform = `${property}(${easeOutOffset}px)`;
    }

    requestId = requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', function() {
    if (!requestId) {
      requestId = requestAnimationFrame(updateParallax);
    }
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!requestId) {
        requestId = requestAnimationFrame(updateParallax);
      }
    } else {
      cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  });

  observer.observe(elementSelector);
}

export function responsiveSizeAdjustment(element, property, perfectScreenWidth, sizeChange = 0) {
    const screenWidth = window.innerWidth;

    const adjustedWidth = Math.floor((screenWidth / perfectScreenWidth) * (100 + sizeChange));

    window.addEventListener('resize', () => {
      element.style[property] = adjustedWidth + '%';
    });
}

export function infiniteScroll(element, options = {}) {
  let currentScrollPosition = 0;

  const scrollStep = options.scrollStep || 0.1;
  const maxScrollLimit = options.maxScrollLimit || 50;
  const transitionType = options.transitionType || "translateX";
  let isAnimating = true;

  function animate() {
    if (!isAnimating) {
      return;
    }
    currentScrollPosition += scrollStep;
    if (currentScrollPosition > maxScrollLimit) {
      currentScrollPosition = 0;
    }

    element.style.transform = `${transitionType}(-${currentScrollPosition}%)`;
    requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      isAnimating = true;
      animate();
    } else {
      isAnimating = false;
    }
  });

  observer.observe(element);
}
