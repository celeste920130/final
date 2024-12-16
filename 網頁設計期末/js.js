// 滾動時觸發顯示浮現效果
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.language-crisis-content p');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = window.innerHeight / 1.5;
        if (elementTop < elementVisible) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
// 滾動時觸發顯示浮現效果
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.language-crisis-content p');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = window.innerHeight / 1.5;
        if (elementTop < elementVisible) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
// 檢查元素是否進入視窗
function checkVisibility() {
    const elements = document.querySelectorAll('.language-crisis-content-right');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // 當元素進入視窗時，添加 'visible' 類別
            element.classList.add('visible');
        }
    });
}

// 監聽滾動事件來觸發檢查
window.addEventListener('scroll', checkVisibility);

// 頁面加載時也檢查一次
window.addEventListener('load', checkVisibility);

// 檢查影片是否進入視窗
function checkVideoVisibility() {
    const video = document.querySelector('.section-video');
    const rect = video.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // 當影片進入視窗範圍時，添加 visible 類別並開始播放
        video.classList.add('visible');
        video.play();
    }
}

// 監聽滾動事件來觸發影片顯示
window.addEventListener('scroll', checkVideoVisibility);

// 頁面加載時也檢查一次
window.addEventListener('load', checkVideoVisibility);
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.language-crisis-content-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                content.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // 當 50% 的內容進入視窗時觸發
    });

    observer.observe(content);
});


// 檢查文字是否進入視窗
function checkTextVisibility() {
    const textSection = document.querySelector('.transition-text');
    const rect = textSection.getBoundingClientRect();

    // 如果文字的上邊界與下邊界在視窗範圍內
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        textSection.classList.add('visible'); // 添加 visible 類別
    }
}

// 監聽滾動事件
window.addEventListener('scroll', checkTextVisibility);

// 頁面加載時檢查一次
window.addEventListener('load', checkTextVisibility);


// 影片滾動時開始播放，並當影片進入視窗開始播放
function handleScroll() {
    const video = document.querySelector('.video');
    const videoContainer = document.querySelector('.video-container1');
    const textSection = document.querySelector('.text-container');
    const rect = videoContainer.getBoundingClientRect();

    // 讓影片當進入視窗時開始播放
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (video.paused) {
            video.play();
        }
    } else {
        if (!video.paused) {
            video.pause();
        }
    }

    // 當文字進入視窗時，讓文字淡入
    const textRect = textSection.getBoundingClientRect();
    if (textRect.top >= 0 && textRect.bottom <= window.innerHeight) {
        textSection.classList.add('visible');
    }
}

// 註冊滾動事件
window.addEventListener('scroll', handleScroll);

// 頁面加載時檢查一次
window.addEventListener('load', handleScroll);


// 检测滚动并触发文字效果
window.addEventListener('scroll', function () {
    const section = document.querySelector('.issue-description');
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight * 0.75) {  // 当部分内容进入视口时
        section.classList.add('in-view');  // 激活文字效果
    } else {
        section.classList.remove('in-view');  // 滚动回去时，移除效果
    }
});

// 當滾動時檢查每個文字區塊是否進入視窗底部
// 當滾動時檢查每個文字區塊是否進入視窗底部
document.addEventListener('scroll', function () {
    const textSections = document.querySelectorAll('.scroll-effect-container .text-section');

    textSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // 檢查是否螢幕底部碰觸到元素頂部
        if (rect.top < windowHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
});


const infoBox = document.getElementById("infoBox");

// Function to show and update cursor position and scroll progress
function trackCursorAndScroll() {
    document.addEventListener("mousemove", updateInfo);
    document.addEventListener("scroll", updateScrollInfo);
    infoBox.style.display = "block"; // Show the info box
}

// Function to stop tracking
function stopTracking() {
    document.removeEventListener("mousemove", updateInfo);
    document.removeEventListener("scroll", updateScrollInfo);
    infoBox.style.display = "none"; // Hide the info box
}

// Function to update cursor position and scroll info
function updateInfo(event) {
    const x = event.clientX;
    const y = event.clientY;

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    // Calculate absolute X and Y
    const absoluteX = x + scrollLeft;
    const absoluteY = y + scrollTop;

    infoBox.textContent = `x: ${x}, y: ${y} | Scroll: ${scrollTop}px (${scrollPercentage}%) | Absolute X: ${absoluteX}, Absolute Y: ${absoluteY}`;
    infoBox.style.left = `${x}px`;
    infoBox.style.top = `${y}px`;
}

// Function to update scroll info only
function updateScrollInfo() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    const infoText = infoBox.textContent.split("|");
    infoText[1] = ` Scroll: ${scrollTop}px (${scrollPercentage}%)`;
    infoBox.textContent = infoText.join("|");
}

// Event listeners for the "i" key
let isTracking = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "i" && !isTracking) {
        isTracking = true;
        trackCursorAndScroll();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "i") {
        isTracking = false;
        stopTracking();
    }
});

document.addEventListener('scroll', function () {
    const movingTexts = document.querySelectorAll('.momomovingtext');

    movingTexts.forEach((text) => {
      const rect = text.getBoundingClientRect();
      const parentRect = document.querySelector("#language-chart-placeholder").getBoundingClientRect();

      if (rect.top >= parentRect.top && rect.bottom <= parentRect.bottom) {
        text.style.animationPlayState = 'running';
      }
    });
  });

  document.addEventListener('scroll', function () {
    const nandaoruma = document.querySelector('.nandaoruma');
    const rect = nandaoruma.getBoundingClientRect();

    // 判斷元素是否進入視口
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // 觸發動畫
      nandaoruma.style.opacity = '1';
      nandaoruma.style.top = '10%';
      nandaoruma.style.textShadow = '0 0 15px #ffcc00, 0 0 30px #ffcc00';
    }
  });

  const videoContainer2 = document.querySelector('.video-containerN');
  const video = videoContainer2.querySelector('.video');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 當 video-container 進入視口時播放影片
      if (entry.isIntersecting) {
        video.play();
      }
      // 當 video-container 離開視口時暫停影片
      else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // 當元素至少 50% 可見時觸發
  });

  // Smooth scrolling effect for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // Fade-in effect for transition-2 text
  const transitionText = document.querySelector('.transition-2');
  if (transitionText) {
    window.addEventListener('scroll', () => {
      const rect = transitionText.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        transitionText.style.opacity = 1;
      } else {
        transitionText.style.opacity = 0.5;
      }
    });
  }
  
  // Add scroll animation to stories
document.addEventListener('DOMContentLoaded', () => {
    const stories = document.querySelectorAll('.story');
  
    const onScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
  
      stories.forEach(story => {
        const storyTop = story.getBoundingClientRect().top;
  
        if (storyTop < triggerHeight) {
          story.classList.add('visible');
        } else {
          story.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
  
    // Trigger animation on load
    onScroll();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const stories = document.querySelectorAll('.story');
    let delay = 0;
  
    stories.forEach((story) => {
      story.style.animationDelay = `${delay}s`;
      delay += 0.5;
    });
  });