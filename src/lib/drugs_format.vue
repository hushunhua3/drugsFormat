<template>
  <div class="drugs_format">
    <div class="drug_type_g" v-for="(drugRow,index) in drugArr" :key="index">
      <div class="drug_g" v-for="(drugList,index_n) in drugRow.row" :key="index_n">
        <span
          class="drug"
          :class="{active:item.active}"
          v-for="(item,nindex) in drugList"
          :key="nindex"
        >{{item.drugName}}x{{item.quantity}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "drugs-format",
  props: {
    // 药品列表  [{"drugName":"百年四宜方","drugType":"06","quantity":1},{"drugName":"醋香附","drugType":"01","quantity":10},{"drugName":"乌药","drugType":"01","quantity":10},{"drugName":"玄胡索","drugType":"01","quantity":10}]
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 一行显示个数
    size: {
        type: Number,
        default: 3,
    },
    // 药品类型排序数组
    sort: {
        type: Array,
        default: function(){
            return ["06", "01", "03", "04", "05", "02", "07", "08"];
        }
    }
  },
  watch: {
    list(newValue, oldValue) {
      this.setDrugArr();
    }
  },
  data() {
    return {
      drugArr: []
    };
  },
  methods: {
    drugFormat(date) {
      if (!date) return [];
      let arr = [];
      date.forEach(i => {
        let type = arr.find(j => {
          return j.find(x => x.drugType == i.drugType);
        });
        if (type) {
          type.push(i);
        } else {
          arr.push([i]);
        }
      });
      let nArr = [];
      this.sort.forEach(i => {
        let type = arr.find(j => {
          return j.find(x => x.drugType == i);
        });
        if (type) nArr.push(type);
      });
      let list = [];
      nArr.forEach(i => {
        i.row = this.sliceArr(i);
      });
      return nArr;
    },
    sliceArr(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i += this.size) {
        result.push(arr.slice(i, i + this.size));
      }
      return result;
    },
    setDrugArr() {
      this.drugArr = this.drugFormat(this.list);
    }
  },
  created() {
    this.setDrugArr();
  }
};
</script>

<style scoped>
.drugs_format {
  font-size: 14px;
  color: #333333;
  line-height: 26px;
}
.drugs_format .drug {
  padding-right: 10px;
}
</style>
