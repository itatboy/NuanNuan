<style>
    @import "colorui/main.css";
    @import "colorui/icon.css";
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 通用 */
	.uni-padding-wrap{
		/* width:690rpx; */
		padding:0 30rpx;
	}
	.uni-common-mt{
		margin-top:30rpx;
	}
	.uni-flex {
		display: flex;
		flex-direction: row;
	}
	.uni-row {
		flex-direction: row;
	}
	.uni-common-pl{
		padding-left:30rpx;
	}
	.uni-title {
		font-size:30rpx;
		font-weight:500;
		padding:20rpx 0;
		line-height:1.5;
	}
	.uni-text{
		font-size:28rpx;
	}
	.uni-title text{
		font-size:24rpx;
		color:#888;
	}
		/* 列表 */
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
		/* .uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	} */
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-hover {
		background-color: #eee;
	}
	.uni-list-cell-pd {
		padding: 22rpx 30rpx;
	}
	.uni-list-cell-left {
	    white-space: nowrap;
		font-size:28rpx;
		padding: 0 30rpx;
	}
	.uni-list-cell-db,
	.uni-list-cell-right {
		flex: 1;
	}
	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30rpx;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list .uni-list-cell:last-child::after {
		height: 0rpx;
	}
	.uni-list-cell-last.uni-list-cell::after {
		height: 0rpx;
	}
	.uni-list-cell-divider {
		position: relative;
		display: flex;
		color: #999;
		background-color: #f7f7f7;
		padding:15rpx 20rpx;
	}
	.uni-list-cell-divider::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-divider::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0rpx;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-navigate {
		font-size:30rpx;
		padding: 22rpx 30rpx;
		line-height: 48rpx;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-navigate {
		padding-right: 36rpx;
	}
	.uni-navigate-badge {
		padding-right: 50rpx;
	}
	.uni-list-cell-navigate.uni-navigate-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24rpx;
		top: 50%;
		color: #bbb;
		transform: translateY(-50%);
	}
	.uni-list-cell-navigate.uni-navigate-bottom:after {
		font-family: uniicons;
		content: '\e581';
		position: absolute;
		right: 24rpx;
		top: 50%;
		color: #bbb;
		transform: translateY(-50%);
	}
	.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
		font-family: uniicons;
		content: '\e580';
		position: absolute;
		right: 24rpx;
		top: 50%;
		color: #bbb;
		transform: translateY(-50%);
	}
	.uni-collapse.uni-list-cell {
		flex-direction: column;
	}
	.uni-list-cell-navigate.uni-active {
		background: #eee;
	}
	.uni-list.uni-collapse {
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	.uni-collapse .uni-list-cell {
		padding-left: 20rpx;
	}
	.uni-collapse .uni-list-cell::after {
		left: 52rpx;
	}
	.uni-list.uni-active {
		height: auto;
	}
</style>
