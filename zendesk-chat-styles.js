// ==UserScript==
// @name         Zendesk Chat Styles
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Makes Zendesk chat look a bit more...like HappyChat?!
// @author       Senff
// @match        https://*.zendesk.com/agent/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

// === Mark chats as such ===================================================
function addGeneralStyles() {

    if(!$('#chat-styles').length) {
        $('body').append('<style type="text/css" id="chat-styles">.zendesk-chat div[data-test-id="omni-log-container"]{background:#e0e0e0}.zendesk-chat div article[data-test-id="omni-log-comment-item"]{width:80%;padding-bottom:30px;margin:10px 20px;background:#ffffff;border-radius:10px;font-size:16px;border:0}.zendesk-chat div article[data-test-id="omni-log-comment-item"] span{line-height:22px !important}.zendesk-chat div article[data-test-id="omni-log-comment-item"] a{text-decoration:underline;font-weight:bold}.zendesk-chat div article[data-test-id="omni-log-comment-item"] span[date-test-id="omni-item-log-sender"] a{color:#000000}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-HE a{color:#ffffff}span[data-test-id="omni-log-item-via"]{display:none}.zendesk-chat .message-HE span[data-test-id=omni-log-item-sender] a,.zendesk-chat .message-HE span[data-test-id=omni-log-item-via],.zendesk-chat .message-HE time{color:#ffffff;text-decoration:none}.zendesk-chat .message-HE button[data-garden-id="buttons.button"]{color:#ffffff;text-decoration:underline}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-BOT{margin-left:calc(20% - 20px);border:dashed 1px #000000;background-color:#F0B849;color:#000000}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-HE .zendesk-note,.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-HE .zendesk-note a{color:#000000}.zendesk-chat div article[data-test-id="omni-log-comment-item"]::after{content:"";position:absolute;bottom:0}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-USER{border-bottom-left-radius:0}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-USER::after{right:auto;left:-8px;border-bottom:8px solid #ffffff;border-left:8px solid transparent;border-right:none}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-HE{margin-left:calc(20% - 20px);background-color:#14ACDD;color:#ffffff;border-bottom-right-radius:0}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-HE::after{left:auto;right:-8px;border-bottom:8px solid #14ACDD;border-right:8px solid transparent;border-left:none}.zendesk-chat div article[data-test-id="omni-log-comment-item"].message-BOT::after{display:none}.zendesk-chat #editor-view{border:solid 3px #78A300;box-shadow:0 0 10px #666}.zendesk-chat #editor-view > div:last-child > div > div > div{border-top:none !important}.zendesk-chat #editor-view > div > div > div{border:none;outline:none !important}.zendesk-chat #editor-view .ck-editor__editable,.zendesk-chat #editor-view .ck-editor__editable li,.zendesk-chat #editor-view .ck-editor__editable p,.zendesk-chat article .zd-comment,.zendesk-chat article .zd-comment li,.zendesk-chat article .zd-comment p{font-size:16px;line-height:22px}.zendesk-chat #editor-view .ck-editor__editable ul,.zendesk-chat article .zd-comment ul{margin-bottom:20px}.zendesk-chat #editor-view .ck-editor__editable li,.zendesk-chat article .zd-comment li{margin-bottom:0}.zendesk-chat #editor-view .ck-editor__editable code,.zendesk-chat #editor-view .ck-editor__editable pre{border:solid 1px #c0c0c0;font-size:15px;padding:3px;background:#ffffff}.zendesk-chat #editor-view .ck-editor__editable pre code{border:0}</style>');
    }

    $('.grid-main-conversation-panel > div[data-side-conversations-anchor-id] input[data-test-id="omni-header-subject"]').each(function() {
        var interactionSubject = $(this).val();
        if (interactionSubject.match("^Conversation with")) {
            $(this).parent().parent().parent().parent().parent().addClass('zendesk-chat');
        }
     });

    $('article[data-test-id="omni-log-comment-item"]').each(function(note) {
      if ($(this).find('svg[data-test-id=omni-log-avatar-badge-AgentBadge]').length > 0) {
       $(this).addClass('message-HE');
      }
      else if ($(this).find('span[data-test-id=omni-log-item-sender] strong').text() == 'HappyBot') {
         $(this).addClass('message-BOT');
      } else {
         $(this).addClass('message-USER');
      }
    });
}

// Loop until styles are added
window.setInterval(function(){
   addGeneralStyles();
}, 2500);
