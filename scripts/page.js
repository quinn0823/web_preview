const pages = {
    "Blogs": "blogs.html",
    "Projects": "projects.html",
    "Standard": "standard.html",
    "Music": "music.html",
    "Website": "website.html"
};
const footer_directory_items = {
    0: {},
    1: {
        "Blogs": {
            "Top Blogs": "blogs.html",
            "Tags": "blogs.html",
            "Archives": "blogs.html"
        }
    },
    2: {
        "Projects": {
            "Top Projects": "projects.html",
            "Web Projects": "projects.html",
            "Scratch Projects": "projects.html"
        },
        "Standards": {
            "Active": "standard.html",
            "Voided": "standard.html",
        }
    },
    3: {
        "Developer": {
            "GitHub": "https://github.com/Quinn0823/",
            "Gitter": "https://matrix.to/#/@quinn0823-6126f7736da0373984840004:gitter.im",
            "Glitch": "https://glitch.com/@Quinn0823",
            "Scratch": "https://scratch.mit.edu/Little-Earthworm/"
        },
        "Social Media": {
            "X": "https://twitter.com/quinnqiu0823",
            "Weibo": "https://weibo.com/quinn0823",
            "哔哩哔哩": "https://space.bilibili.com/605805547",
            "知乎": "https://www.zhihu.com/people/quinn0823"
        }
    },
    4: {
        "Quinn-Web": {
            "Repository": "https://github.com/Quinn0823/web_preview",
            "Releases": "https://github.com/Quinn0823/web_preview/releases",
            "Commits": "https://github.com/Quinn0823/web_preview/commits/main",
            "Issues": "https://github.com/Quinn0823/web_preview/issues",
            "Website": "website.html"
        }
    }
}

var headernav_list = "<li><a href=''><img src='images/icons/large/icon-128.png' alt=''></a></li>";
for (let i in pages) {
    headernav_list = headernav_list + "<li><a href='" + pages[i] + "'>" + i + "</a></li>";
}

headernav_list = "<div class='headernav-contnet'><ul>" + headernav_list + "</ul><div class='headernav-error'></div></div>"
document.getElementById("headernav").innerHTML = headernav_list;



var footer_directory_pages = "<li><a href=''>Home</a></li>"
for (let i in pages) {
    footer_directory_pages = footer_directory_pages + "<li><a href='" + pages[i] + "'>" + i + "</a></li>";
}
footer_directory_pages = "<nav class='footer-directory-column-section'><h3>Pages</h3><ul>" + footer_directory_pages +"</ul></nav>";

var footer_directory = "";
for (let i in footer_directory_items) {
    let footer_directory_column = "";
    for (let j in footer_directory_items[i]) {
        let footer_directory_column_section = "";
        for (let k in footer_directory_items[i][j]) {
            if (footer_directory_items[i][j][k].indexOf("http") == -1) {
                footer_directory_column_section = footer_directory_column_section + "<li><a href='" + footer_directory_items[i][j][k] + "'>" + k + "</a></li>"
            } else {
                footer_directory_column_section = footer_directory_column_section + "<li><a href='" + footer_directory_items[i][j][k] + "' target='_blank'>" + k + "</a></li>"
            }
        }
        footer_directory_column_section = "<nav class='footer-directory-column-section'><h3>" + j + "</h3><ul>" + footer_directory_column_section +"</ul></nav>";

        footer_directory_column = footer_directory_column + footer_directory_column_section;
    }
    if (i == 0) {
        footer_directory_column = footer_directory_pages + footer_directory_column;
    }
        
    footer_directory_column = "<nav class='footer-directory-column'>" + footer_directory_column + "</nav>";

    footer_directory = footer_directory + footer_directory_column;
}
footer_directory = "<nav class='footer-directory'>" + footer_directory + "</nav>";


var footer_footer = "<section class='footer-footer'><div class='footer-footer-contact'>Email me at <a href='mailto:quinnqiu0823@icloud.com'>quinnqiu0823@icloud.com</a>.</div><div class='footer-footer-locale'>United States</div><div class='footer-footer-copyright'>Copyright © 2024 Quinn Qiu All Rights Reserved.</div></section>";

document.getElementById("footer-content").innerHTML = document.getElementById("footer-content").innerHTML + footer_directory + footer_footer;