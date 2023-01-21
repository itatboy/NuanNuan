<template>
	<view>
		<view class="cu-form-group margin-top">
			<view class="title">喂养时间</view>
			<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	 export default {
	        data() {
	            return {
	                multiArray: [
	                    [],
	                    [],
	                    []
	                ],
	                objectMultiArray: [{
	                        name:'长江农场',
	                        dept:[
	                            {
	                            name:'蔬菜大棚',
	                            product:[
	                                {
	                                    name:'传感器'
	                                },{
	                                    name:'湿度',
	                                }
	                            ]
	                        }
	                        ]
	                    },{
	                        name:'汉阳示范农场',
	                        dept:[
	                            {
	                            name:'水果大棚',
	                            product:[
	                                {
	                                    name:'温度'
	                                },{
	                                    name:'压力',
	                                }
	                            ]
	                            },
	                            {
	                            name:'养殖场',
	                            product:[
	                                {
	                                    name:'水电'
	                                },{
	                                    name:'压力',
	                                }
	                            ]
	                            },
	                        ]
	                    }
	                ],
	                multiIndex: [0, 0, 0],
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
	                this.index = e.detail.value
	            },
	            MultiChange(e) {
	                this.multiIndex = e.detail.value
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
	                        data.multiArray[1] = result[0]
	                        data.multiArray[2] = result[1]
	                        break;
	                    case 1:
	                        data.multiIndex[2] = 0;
	                        data.multiArray[2] = this.searchColumn()[1]
	                        break;
	                }
	                this.multiArray = data.multiArray;
	                this.multiIndex = data.multiIndex;
	            },
	            searchColumn(){
	                var arr1 = [];
	                var arr2 = [];
	                for (var i = 0; i < this.objectMultiArray.length; i++) {
	                    if(i == this.multiIndex[0]){
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
	                return [arr1,arr2];
	            },
	            CheckboxChange(e) {
	                var items = this.checkbox,
	                    values = e.detail.value;
	                for (var i = 0, lenI = items.length; i < lenI; ++i) {
	                    items[i].checked = false;
	                    for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
	                        if (items[i].value == values[j]) {
	                            items[i].checked = true;
	                            break
	                        }
	                    }
	                }
	            }
	        }
	    }
</script>

<style>
	button .cu-tag {
		position: absolute;
		top: 8upx;
		right: 8upx;
	}
</style>
