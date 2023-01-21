"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      multiArray: [
        [],
        [],
        []
      ],
      objectMultiArray: [
        {
          name: "\u957F\u6C5F\u519C\u573A",
          dept: [
            {
              name: "\u852C\u83DC\u5927\u68DA",
              product: [
                {
                  name: "\u4F20\u611F\u5668"
                },
                {
                  name: "\u6E7F\u5EA6"
                }
              ]
            }
          ]
        },
        {
          name: "\u6C49\u9633\u793A\u8303\u519C\u573A",
          dept: [
            {
              name: "\u6C34\u679C\u5927\u68DA",
              product: [
                {
                  name: "\u6E29\u5EA6"
                },
                {
                  name: "\u538B\u529B"
                }
              ]
            },
            {
              name: "\u517B\u6B96\u573A",
              product: [
                {
                  name: "\u6C34\u7535"
                },
                {
                  name: "\u538B\u529B"
                }
              ]
            }
          ]
        }
      ],
      multiIndex: [0, 0, 0]
    };
  },
  onLoad() {
    for (var i = 0; i < this.objectMultiArray.length; i++) {
      this.multiArray[0].push(this.objectMultiArray[i].name);
    }
    for (var j = 0; j < this.objectMultiArray[this.multiIndex[0]].dept.length; j++) {
      this.multiArray[1].push(this.objectMultiArray[this.multiIndex[0]].dept[j].name);
    }
    for (var k = 0; k < this.objectMultiArray[this.multiIndex[0]].dept[this.multiIndex[1]].product.length; k++) {
      this.multiArray[2].push(this.objectMultiArray[this.multiIndex[0]].dept[this.multiIndex[1]].product[k].name);
    }
  },
  methods: {
    PickerChange(e) {
      this.index = e.detail.value;
    },
    MultiChange(e) {
      this.multiIndex = e.detail.value;
    },
    MultiColumnChange(e) {
      let data = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          let result = this.searchColumn();
          data.multiArray[1] = result[0];
          data.multiArray[2] = result[1];
          break;
        case 1:
          data.multiIndex[2] = 0;
          data.multiArray[2] = this.searchColumn()[1];
          break;
      }
      this.multiArray = data.multiArray;
      this.multiIndex = data.multiIndex;
    },
    searchColumn() {
      var arr1 = [];
      var arr2 = [];
      for (var i = 0; i < this.objectMultiArray.length; i++) {
        if (i == this.multiIndex[0]) {
          for (var j = 0; j < this.objectMultiArray[i].dept.length; j++) {
            arr1.push(this.objectMultiArray[i].dept[j].name);
            if (j == this.multiIndex[1]) {
              for (var k = 0; k < this.objectMultiArray[i].dept[j].product.length; k++) {
                arr2.push(this.objectMultiArray[i].dept[j].product[k].name);
              }
            }
          }
        }
      }
      return [arr1, arr2];
    },
    CheckboxChange(e) {
      var items = this.checkbox, values = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value == values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.multiArray[0][$data.multiIndex[0]]),
    b: common_vendor.t($data.multiArray[1][$data.multiIndex[1]]),
    c: common_vendor.t($data.multiArray[2][$data.multiIndex[2]]),
    d: common_vendor.o((...args) => $options.MultiChange && $options.MultiChange(...args)),
    e: common_vendor.o((...args) => $options.MultiColumnChange && $options.MultiColumnChange(...args)),
    f: $data.multiIndex,
    g: $data.multiArray
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/tatbo/Documents/HBuilderProjects/\u6696\u6696\u516C\u4E3B\u8BB0/pages/census/census.vue"]]);
wx.createPage(MiniProgramPage);
