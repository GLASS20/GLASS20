---
show: true
width: 4
date: 2020-01-12 00:01:00 +0800
---
<div>
    <div class="card-body">
        <iframe
            id="steam-profile-frame"    
            src="{{ '/steam_card.html' | relative_url }}"
            frameborder="0"
            scrolling="no"
            style="display:block;width:100%;height:auto;border:0;"
            onload="this.style.height = this.contentWindow.document.body.scrollHeight + 'px'; $('.grid').masonry('layout');"
        ></iframe>
    </div>
</div>
