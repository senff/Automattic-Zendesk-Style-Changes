// ==UserScript==
// @name         Zendesk Chat Styles
// @namespace    http://tampermonkey.net/
// @version      0.9.6
// @description  Makes Zendesk chat look a bit more...like HappyChat?!
// @author       Senff
// @match        https://woothemes.zendesk.com/agent/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

// === Mark chats as such ===================================================
function addGeneralStyles() {

    if(!$('#chat-styles').length) {
        $('body').append('<style type="text/css" id="chat-styles">.grid-main-conversation-panel .polaris.ticket.section input[aria-label="Subject"]{font-size:30px;padding:15px 15px 20px 0;margin-bottom:20px;text-shadow:1px 1px #ffffff;color:#78A300;color:#666;border:0;border-bottom:double 7px #78A300;border-radius:0;background:#ececec;font-weight:bold}.omni-conversation-pane .ember-view > div:first-child{background:#ececec;box-shadow:0 0 10px #666}div[data-test-id="omni-log-container"]{background:#e0e0e0}div article[data-test-id="omni-log-comment-item"]{padding-bottom:30px;margin:10px 20px;background:#ffffff;border-radius:10px;font-size:16px;border:0}div article div[data-test-id="omni-log-item-message"] *{font-size:16px;line-height:22px !important}div article div[data-test-id="omni-log-item-message"] ul{margin-bottom:20px}div article div[data-test-id="omni-log-item-message"] a{text-decoration:underline;font-weight:bold}div article[data-test-id="omni-log-comment-item"]::after{content:"";position:absolute;bottom:0}span[data-test-id="omni-log-item-via"]{font-size:11px}div article[data-test-id="omni-log-comment-item"].message-HE-with-note{background:#FFFFCC;width:auto;padding-bottom:15px}div article[data-test-id="omni-log-comment-item"].message-HE-with-note div.cfKRwa,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div.iwLrND{padding-left:0;padding-right:0}div article[data-test-id="omni-log-comment-item"].message-HE-with-note div[data-test-id="omni-log-item-message"] div,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div[data-test-id="omni-log-item-message"] div div{border:none;background:transparent;box-shadow:none;padding-bottom:0;-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}div article[data-test-id="omni-log-comment-item"].chat-HE{width:80%;margin-left:calc(20% - 20px);background-color:#14ACDD;color:#ffffff !important;border-bottom-right-radius:0}div article[data-test-id="omni-log-comment-item"].chat-HE span[data-test-id="omni-log-item-via"],div article[data-test-id="omni-log-comment-item"].chat-HE time,div article[data-test-id="omni-log-comment-item"].chat-HE button svg{color:#ffffff}div article[data-test-id="omni-log-comment-item"].chat-HE button[data-test-id=convolog-item-message-assign-ticket]{color:#ffffff}div article[data-test-id="omni-log-comment-item"].chat-HE a{color:#ffffff}div article[data-test-id="omni-log-comment-item"].chat-HE::after{content:"";position:absolute;bottom:0;left:auto;right:-7px;border-bottom:8px solid #14ACDD;border-right:8px solid transparent;border-left:none}div article[data-test-id="omni-log-comment-item"].chat-USER{width:80%;margin-right:calc(20% - 20px);border-bottom-left-radius:0}div article[data-test-id="omni-log-comment-item"].chat-USER::after{content:"";position:absolute;bottom:0;left:-7px;right:auto;border-bottom:8px solid #ffffff;border-left:8px solid transparent;border-right:none}div article[data-test-id="omni-log-comment-item"].message-BOT{width:80%;margin-left:calc(20% - 20px);border:dashed 1px #000000;background-color:#F0B849;color:#000000}div article[data-test-id="omni-log-comment-item"].message-EMAIL{border:solid 1px #000000}#editor-view{border:solid 3px #78A300;box-shadow:0 0 10px #666}#editor-view > div:last-child > div > div > div{border-top:none !important}#editor-view > div > div > div{border:none;outline:none !important}#editor-view .ck-editor__editable,#editor-view .ck-editor__editable li,#editor-view .ck-editor__editable p{font-size:16px;line-height:22px}#editor-view .ck-editor__editable ul{margin-bottom:20px}#editor-view .ck-editor__editable li{margin-bottom:0}#editor-view .ck-editor__editable code,#editor-view .ck-editor__editable pre{border:solid 1px #c0c0c0;font-size:15px;padding:3px;background:#ffffff}#editor-view .ck-editor__editable pre code{border:0}.zendesk-editor--rich-text-container{padding:0;background:#ffffff}.zendesk-editor--rich-text-container .ck-editor__editable{padding-top:10px;padding-bottom:20px}.zendesk-editor--rich-text-container div[aria-label="Public reply composer"]{background:transparent}.zendesk-editor--rich-text-container div[aria-label="Internal note composer"]{background:#FFFFCC;min-height:100%}#editor-view div[data-test-id="ticket-rich-text-editor"]{order:5}#editor-view div[data-test-id="rich-text-editor-toolbar-container"]{top:-7px;left:160px}#editor-view .zendesk-editor--rich-text-container > div:last-child{min-height:0}#editor-view .zendesk-editor--rich-text-container > div:last-child [data-role="editor-attachment-container"]{margin-top:20px;margin-bottom:10px;padding:0;border:dashed 1px #999999}.zendesk-note{margin:0;width:auto;-moz-box-shadow:0;-webkit-box-shadow:0;box-shadow:0;-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}</style>');
    }

    $('article[data-test-id="omni-log-comment-item"]').each(function(note) {
        if (($(this).find("div.cfKRwa").length) || ($(this).find("div.iwLrND").length)){
            $(this).addClass('message-HE-with-note');
        } else if ($(this).find('span[data-test-id=omni-log-item-sender] strong').text() == 'HappyBot') {
            $(this).addClass('message-BOT');
        } else if ($(this).find('span[data-test-id=omni-log-item-via]').html()=='via messaging') {
            if ($(this).find('svg[data-test-id=omni-log-avatar-badge-AgentBadge]').length) {
                $(this).addClass('chat-HE');
            } else {
                $(this).addClass('chat-USER');
            }
        } else {
            $(this).addClass('message-EMAIL');
        }
    });

}

// Loop until styles are added
window.setInterval(function(){
   addGeneralStyles();
}, 2500);
