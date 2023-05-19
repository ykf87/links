<div class="content">
	<div class="flex pickers">
		<div class="flex1" v-for="(item, index) in pickers" :key="index">
			<picker @change="bindPickerChange" :value="item.pickerindex" :range="item.vals">
				<div class="uni-input flex v c">
					<div>{{item.text}}: {{item.vals[item.pickerindex]}}</div>
					<i class="iconfont icon-arrow-up"></i>
				</div>
			</picker>
		</div>
	</div>
	<div class="list">
		<div class="row" v-for="(item, index) in list" :key="index">
			<div class="t1 flex v">
				<div class="imager">
					<image mode="aspectFill" src="https://t13.baidu.com/it/u=2885378746,868463782&fm=224&app=112&size=h200&n=0&f=JPEG&fmt=auto?sec=1684342800&t=884cc69601370449d0c9fd238457b3b7"></image>
				</div>
				<div class="flex1 infos flex vd">
					<div class="title flex1">家用防水防漏隔尿裙</div>
					<div class="status flex v">
						<div class="status-text">订单已支付</div>
						<div class="paytime">2023-05-16 16:15:18 付款</div>
					</div>
				</div>
				<div class="eyes iconfont icon-browse"></div>
			</div>
			<div class="t2 flex v">
				<div class="flex1">
					<div class="flex c t21">￥31.89</div>
					<div class="t2txt flex c">付款金额</div>
				</div>
				<div class="flex1">
					<div class="flex c t21">40.00%</div>
					<div class="t2txt flex c">佣金率</div>
				</div>
				<div class="flex1">
					<div class="flex c t21">￥13.28</div>
					<div class="t2txt flex c">佣金收入</div>
				</div>
			</div>
			<div class="t3 flex v">
				<div class="img">
					<image src="https://himg.bdimg.com/sys/portraitn/item/public.1.6959eed7.-G-XeMm5yyFHj8c-Gc5G2g"></image>
				</div>
				<div class="text flex1">米妈分享好物</div>
				<div class="eyes iconfont icon-browse"></div>
			</div>
		</div>
	</div>
</div>