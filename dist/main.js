(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

window.onload = function () {
  cc.game.onStart = function () {
    cc.LoaderScene.preload(["HelloWorld.png"], function () {
      var MyScene = cc.Scene.extend({
        onEnter: function onEnter() {
          this._super();
          var size = cc.director.getWinSize();
          var sprite = cc.Sprite.create("HelloWorld.png");
          sprite.setPosition(size.width / 2, size.height / 2);
          sprite.setScale(0.8);
          this.addChild(sprite, 0);
          var label = cc.LabelTTF.create("Hello World", "Arial", 40);
          label.setPosition(size.width / 2, size.height / 2);
          this.addChild(label, 1);
        }
      });
      cc.director.runScene(new MyScene());
    }, undefined);
  };
  cc.game.run("gameCanvas");
};

},{}]},{},[1]);
