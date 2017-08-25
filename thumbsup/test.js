'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThumbsUp = function () {
  function ThumbsUp(count, id) {
    _classCallCheck(this, ThumbsUp);

    this.count = count;
    this.id = id;
    this.animNode = [];
  }

  _createClass(ThumbsUp, [{
    key: 'addPraise',
    value: function addPraise() {
      return this.count++;
    }
  }, {
    key: 'createAnimaNode',
    value: function createAnimaNode() {
      var animNode = document.createElement('span');
      animNode.className = 'add-prise';
      animNode.innerText = '+' + this.addPraise();
      this.animNode.push[animNode];
      var parentNode = document.getElementById(this.id);
      parentNode.appendChild(animNode);
    }
  }, {
    key: 'removeNode',
    value: function removeNode() {
      var parentNode = document.getElementById(this.id);
      if (this.animNode && this.animNode.length > 0) {
        parentNode.removeChild(this.animNode.splice(0, 1));
      }
    }
  }, {
    key: 'delayCommit',
    value: function delayCommit() {
      var _this = this;

      setTimeout(function () {
        _this.removeNode();
      }, 500);
    }
  }]);

  return ThumbsUp;
}();

exports.default = ThumbsUp;
