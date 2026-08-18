---
show: true
width: 4
date: 2020-01-12 00:01:00 +0800
class: "w-100 h-100" 
---

<iframe id="steam-profile-frame" src="{{ '/steam_card.html' | relative_url }}" frameborder="0" scrolling="no" style="display: block; width: 100%; border: 0; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);"></iframe>

<script>
    window.addEventListener("message", function (event) {
        if (!event.data) {
            return;
        }
        if (event.data.type === "steam-profile-resize") {
            const iframe = document.getElementById("steam-profile-frame");
            if (!iframe) {
                return;
            }
            // 更新高度[cite: 1, 3]
            iframe.style.height = `${event.data.height}px`;

            // 如果页面使用了 Masonry，刷新网格布局[cite: 2]
            if (typeof $ !== 'undefined' && $('.grid').masonry) {
                $('.grid').masonry('layout');
            }
        }
    });
</script>