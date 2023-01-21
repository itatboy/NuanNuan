"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    const milks = [];
    const date = new Date();
    const years = [];
    const year = date.getFullYear();
    const months = [];
    const month = date.getMonth() + 1;
    const days = [];
    const day = date.getDate();
    const hours = [];
    const hour = date.getHours();
    const minutes = [];
    const minute = date.getMinutes();
    for (let i = 5; i <= 280; i += 5) {
      milks.push(i);
    }
    return {
      title: "picker-view",
      milks,
      years,
      year,
      months,
      month,
      days,
      day,
      hours,
      hour,
      minutes,
      minute,
      milkValue: [1],
      multiIndex: [0, 0, 0],
      multiArray: [
        [],
        [],
        []
      ],
      visible: true,
      indicatorStyle: `height: 50px;`,
      maskStyle: "padding:10px 0",
      maskStyle: "",
      CustomBar: this.CustomBar,
      modalName: null,
      radio: "radio1",
      title: "uni-fab",
      directionStr: "\u5782\u76F4",
      horizontal: "right",
      vertical: "bottom",
      direction: "vertical",
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#7A7E83",
        buttonColor: "#007AFF",
        iconColor: "#fff"
      },
      is_color_type: false,
      content: [
        {
          iconPath: "/static/baby/feeder.png",
          selectedIconPath: "/static/baby/feeder.png",
          active: false
        },
        {
          iconPath: "/static/baby/diapers.png",
          selectedIconPath: "/static/baby/diapers.png",
          active: false
        },
        {
          iconPath: "/static/baby/sleep.png",
          selectedIconPath: "/static/baby/sleep.png",
          active: false
        },
        {
          iconPath: "/static/baby/drug.png",
          selectedIconPath: "/static/baby/drug.png",
          active: false
        }
      ]
    };
  },
  onBackPress() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close();
      return true;
    }
    return false;
  },
  onLoad() {
    for (let i = 2022; i <= this.year; i++) {
      if (i == this.year) {
        this.tempMonth = this.month;
      } else {
        this.tempMonth = 12;
      }
      for (let j = 1; j <= this.tempMonth; j++) {
        if (j == this.month) {
          this.tempDay = this.day;
        } else {
          this.tempDay = 31;
        }
        for (let k = 1; k <= this.tempDay; k++) {
          const temp = i + "\u5E74" + j + "\u6708" + k + "\u65E5";
          this.multiArray[0].push(temp);
        }
      }
    }
    this.multiIndex[0] = this.multiArray[0].length - 1;
    for (let l = 0; l <= 23; l++) {
      const temp = l + "\u65F6";
      this.multiArray[1].push(temp);
    }
    for (let m = 0; m <= 59; m++) {
      const temp = m + "\u5206";
      this.multiArray[2].push(temp);
    }
    this.multiIndex[1] = this.hour;
    this.multiIndex[2] = this.minute;
  },
  methods: {
    MultiChange(e) {
      const temp = e.detail.value;
      this.multiIndex[0] = temp[0];
      this.multiIndex[1] = temp[1];
      this.multiIndex[2] = temp[2];
    },
    trigger(e) {
      console.log(e);
      this.content[e.index].active = !e.item.active;
      console.log(e.index);
      if (e.index == 0) {
        this.modalName = "bottomModal";
      } else if (e.index == 1) {
        this.modalName = e.currentTarget.dataset.target;
      } else if (e.index == 2) {
        this.modalName = e.currentTarget.dataset.target;
      } else if (e.index == 3) {
        this.modalName = e.currentTarget.dataset.target;
      }
    },
    hideModal(e) {
      this.modalName = null;
    }
  }
};
if (!Array) {
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  _easycom_uni_fab2();
}
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  _easycom_uni_fab();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("fab", "783a86f2-0"),
    b: common_vendor.o($options.trigger),
    c: common_vendor.o(_ctx.fabClick),
    d: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: $data.horizontal,
      vertical: $data.vertical,
      direction: $data.direction
    }),
    e: common_vendor.o((...args) => $options.hideModal && $options.hideModal(...args)),
    f: common_vendor.o((...args) => $options.hideModal && $options.hideModal(...args)),
    g: $data.visible
  }, $data.visible ? {
    h: common_vendor.f($data.milks, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    i: $data.indicatorStyle,
    j: $data.maskStyle,
    k: $data.milkValue,
    l: common_vendor.o((...args) => _ctx.bindChange && _ctx.bindChange(...args))
  } : {}, {
    m: common_vendor.t($data.multiArray[0][$data.multiIndex[0]]),
    n: common_vendor.t($data.multiArray[1][$data.multiIndex[1]]),
    o: common_vendor.t($data.multiArray[2][$data.multiIndex[2]]),
    p: common_vendor.o((...args) => $options.MultiChange && $options.MultiChange(...args)),
    q: common_vendor.o((...args) => _ctx.MultiColumnChange && _ctx.MultiColumnChange(...args)),
    r: $data.multiIndex,
    s: $data.multiArray,
    t: common_vendor.n($data.modalName == "bottomModal" ? "show" : "")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/tatbo/Documents/HBuilderProjects/\u6696\u6696\u516C\u4E3B\u8BB0/pages/baby/baby.vue"]]);
wx.createPage(MiniProgramPage);
