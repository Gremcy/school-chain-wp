(()=>{var t={817:()=>{var t=jQuery;t(window).on("load",(function(){var e=qTranslateConfig.js.get_qtx();return;e.enableLanguageSwitchingButtons("block"),"acf-field-group"!==t("#post_type").val()?(t.each({text:"input:text",textarea:"textarea"},(function(a,n){acf.findFields({type:a}).each((function(){t(this).find(n).each((function(){e.hasContentHook(this)||e.addContentHookB(this)}))}))})),acf.addFilter("wysiwyg_tinymce_settings",(function(t,a,n){if("wysiwyg"===n.type){var i=n.$input()[0];e.addContentHookB(i);var r=t.init_instance_callback;t.init_instance_callback=function(t){void 0!==r&&r(),e.attachEditorHook(t)}}return t}))):acf.addAction("open_field_object",(function(t){t.$el.find("input:text, textarea").each((function(){var t=this;!e.hasContentHook(t)&&function(t){return t.id.match(/acf_fields-(\d+|field_[a-z0-9]+)-(label|instructions|default_value)/)}(t)&&e.addContentHookB(t)}))}))}))},719:()=>{var t=jQuery;acf.registerFieldType(acf.models.FileField.extend({type:"qtranslate_file",$control:function(){return this.$(".acf-file-uploader.current-language")},$input:function(){return this.$('.acf-file-uploader.current-language input[type="hidden"]')},render:function(t){t=this.validateAttachment(t),this.$control().find("img").attr({src:t.icon,alt:t.alt,title:t.title}),this.$control().find('[data-name="title"]').text(t.title),this.$control().find('[data-name="filename"]').text(t.filename).attr("href",t.url),this.$control().find('[data-name="filesize"]').text(t.filesizeHumanReadable);var e=t.id||"";acf.val(this.$input(),e),e?this.$control().addClass("has-value"):this.$control().removeClass("has-value")}})),acf.registerFieldType(acf.models.ImageField.extend({type:"qtranslate_image",$control:function(){return this.$(".acf-image-uploader.current-language")},$input:function(){return this.$('.acf-image-uploader.current-language input[type="hidden"]')},render:function(t){t=this.validateAttachment(t),this.$control().find("img").attr({src:t.url,alt:t.alt,title:t.title});var e=t.id||"";this.val(e),e?this.$control().addClass("has-value"):this.$control().removeClass("has-value")}})),acf.registerFieldType(acf.models.PostObjectField.extend({type:"qtranslate_post_object",$control:function(){return this.$(".acf-post-object.current-language")},$input:function(){return this.$(".acf-post-object.current-language select")},initialize:function(){var e=this,a=this.$input();if(this.inherit(a),this.get("ui")){var n=this.get("ajax_action");n||(n="acf/fields/"+this.get("type")+"/query"),this.select2=[],this.$(".acf-post-object select").each((function(){var a=acf.newSelect2(t(this),{field:e,ajax:e.get("ajax"),multiple:e.get("multiple"),placeholder:e.get("placeholder"),allowNull:e.get("allow_null"),ajaxAction:n});e.select2.push(a)})),this.$(".acf-post-object span.select2-selection").addClass("qtranxs-translatable")}},onRemove:function(){if(this.select2)for(var t=0;t<this.select2.length;t++)this.select2[t].destroy()}})),acf.registerFieldType(acf.models.UrlField.extend({type:"qtranslate_url",$control:function(){return this.$(".acf-input-wrap.current-language")},$input:function(){return this.$('.acf-input-wrap.current-language input[type="url"]')}})),acf.registerFieldType(acf.models.WysiwygField.extend({type:"qtranslate_wysiwyg",$control:function(){return this.$(".acf-editor-wrap.current-language")},$input:function(){return this.$(".acf-editor-wrap.current-language textarea")},initializeEditor:function(){var e=this;this.$(".acf-editor-wrap").each((function(){var a=t(this),n=a.find("textarea"),i={tinymce:!0,quicktags:!0,toolbar:e.get("toolbar"),mode:e.getMode(),field:e},r=n.attr("id"),l=acf.uniqueId("acf-editor-");acf.rename({target:a,search:r,replace:l,destructive:!0}),e.set("id",l,!0),acf.tinymce.initialize(l,i)}))}})),acf.addFilter("wysiwyg_tinymce_settings",(function(t,e,a){if("qtranslate_wysiwyg"===a.type){var n=t.init_instance_callback;t.init_instance_callback=function(t){void 0!==n&&n(),t.getContentAreaContainer().classList.add("qtranxs-translatable")}}return t}))},174:()=>{var t=jQuery,e=t("body"),a=function(e){var a=t(".multi-language-field");a.find(".current-language").removeClass("current-language"),a.find('[data-language="'+e+'"]').addClass("current-language"),a.find('input[data-language="'+e+'"], textarea[data-language="'+e+'"]')};e.on("click",".qtranxs-lang-switch",(function(){var e=t(this).attr("lang");a(e)})),e.on("click",".wp-switch-editor[data-language]",(function(){var e=t(this).parent(".multi-language-field"),a=t(this).data("language");return e.find(".current-language").removeClass("current-language"),e.find('[data-language="'+a+'"]').addClass("current-language"),e.find('input[data-language="'+a+'"], textarea[data-language="'+a+'"]').focus(),t('.qtranxs-lang-switch[lang="'+a+'"]:first').trigger("click"),!1})),e.on("focusin",".multi-language-field input, .multi-language-field textarea",(function(){t(this).parent(".multi-language-field").addClass("focused")})),e.on("focusout",".multi-language-field input, .multi-language-field textarea",(function(){t(this).parent(".multi-language-field").removeClass("focused")})),e.on("click",".wp-editor-tabs .wp-switch-editor",(function(){var e=t(this).parents(".multi-language-field"),a=t(this).hasClass("switch-tmce")?"tmce":"html";e.find(".wp-editor-tabs .wp-switch-editor.switch-"+a).not(this).each((function(){var e=t(this).attr("data-wp-editor-id");e&&window.switchEditors.go(e,a)}))})),t((function(){if(qTranslateConfig.LSB){var e=qTranslateConfig.js.get_qtx().getActiveLanguage();if(e){a(e);var n=t(".multi-language-field");n.find(".current-language").removeClass("current-language"),n.find('[data-language="'+e+'"]').addClass("current-language")}}}))}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";a(719),a(174),a(817)})()})();