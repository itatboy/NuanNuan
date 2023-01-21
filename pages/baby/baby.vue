<template>
	<view class="uni-flex uni-row">
		<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
			<text>奶量</text>
		</view>
		<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
			<text>粑粑</text>
		</view>
		<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
			<text>睡眠</text>
		</view>
	</view>
	
	<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
		:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	
	<!-- 奶瓶 -->
	<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white">
				<view class="action text-red text-lg" @tap="hideModal">取消</view>
				<view class="action text-green text-lg" @tap="hideModal">添加</view>
			</view>
			<!-- 喂养奶量 -->
			<picker-view v-if="visible" :indicator-style="indicatorStyle" :mask-style="maskStyle" :value="milkValue" @change="bindChange">
				<picker-view-column>
					<view class="item" v-for="(item,index) in milks" :key="index">{{item}}ml</view>
				</picker-view-column>
			</picker-view>
			<!-- 喂养时间 -->
			<view class="cu-form-group">
				<view class="title">喂养时间</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}}{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
		</view>
	</view>
	
	<!-- 尿布 -->
	
	<!-- 睡眠 -->
	
	<!-- 用药 -->
</template>

<script>
	export default {
		components: {},
		data() {
			const milks = []
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			const hours = []
			const hour = date.getHours()
			const minutes = []
			const minute = date.getMinutes()
			// 奶量
			for (let i = 5; i <= 280; i+=5) {
				milks.push(i)
			}
			return {
				title: 'picker-view',
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
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
				visible: true,
				indicatorStyle: `height: 50px;`,
				maskStyle: "padding:10px 0",
				maskStyle: "",
				CustomBar: this.CustomBar,
				modalName: null,
				radio: 'radio1',
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#7A7E83',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				content: [{
						iconPath: '/static/baby/feeder.png',
						selectedIconPath: '/static/baby/feeder.png',
						active: false
					},
					{
						iconPath: '/static/baby/diapers.png',
						selectedIconPath: '/static/baby/diapers.png',
						active: false
					},
					{
						iconPath: '/static/baby/sleep.png',
						selectedIconPath: '/static/baby/sleep.png',
						active: false
					},
					{
						iconPath: '/static/baby/drug.png',
						selectedIconPath: '/static/baby/drug.png',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		onLoad() {
			let tempMonth, tempDay, tempHour, tempMinute
			// 日期计算
			for (let i = 2022; i <= this.year; i++) {
				if(i ==  this.year) {
					this.tempMonth = this.month
				}
				else {
					this.tempMonth = 12
				}
				for (let j = 1; j <= this.tempMonth; j++) {
					if(j == this.month) {
						this.tempDay = this.day
					}
					else {
						this.tempDay = 31
					}
					for (let k = 1; k <= this.tempDay; k++) {
						const temp = i + '年' + j + '月' + k + '日'
						this.multiArray[0].push(temp)
					}
				}
			}
			this.multiIndex[0] = this.multiArray[0].length - 1
			
			// 时间计算
			for (let l = 0; l <= 23; l++) {
				const temp = l + '时'
				this.multiArray[1].push(temp)
			}
			for (let m = 0; m <= 59; m++) {
				const temp = m + '分'
				this.multiArray[2].push(temp)
			}
			this.multiIndex[1] = this.hour
			this.multiIndex[2] = this.minute
		},
		methods: {
			MultiChange (e) {
				const temp = e.detail.value
				this.multiIndex[0] = temp[0]
				this.multiIndex[1] = temp[1]
				this.multiIndex[2] = temp[2]
			},
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				console.log(e.index)
				
				if(e.index == 0)
				{
					this.modalName = 'bottomModal'
				}
				else if(e.index == 1)
				{
					this.modalName = e.currentTarget.dataset.target
				}
				else if(e.index == 2)
				{
					this.modalName = e.currentTarget.dataset.target
				}
				else if(e.index == 3)
				{
					this.modalName = e.currentTarget.dataset.target
				}
			},
			hideModal(e) {
				this.modalName = null
			}
		}
	}
</script>

<style lang="scss">
	.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		background-color: #ebebeb;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}

	.desc {
		/* text-indent: 40rpx; */
	}
	.flex-pc {
		display: flex;
		justify-content: center;
	}
	
	.warp {
		padding: 10px;
	}

	.button {
		margin-bottom: 10px;
	}
	.uni-picker-tips {
		font-size: 12px;
		color: #666;
		margin-bottom: 15px;
		padding: 0 15px;
		/* text-align: right; */
	}
	picker-view {
		width: 100%;
		height: 600rpx;
		margin-top:20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}
</style>