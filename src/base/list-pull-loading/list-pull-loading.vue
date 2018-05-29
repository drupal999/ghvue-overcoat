<template>
	<div class="list-pull-loading">
		<div class="loading-mask" v-show="isLoading" @touch.stop.prevent></div>
		<slot name="goTop">
			<transition name="fade">
			<div class="go-top" @click.stop.prevent="gotoTop" v-if="isShowToTop && isCanToTop">
				<img src="./imgs/top.png"/>
			</div>
			</transition>
		</slot>
		<div class="list-pull-loading-box" ref="scroller">
			<div class="list-pull-loading-scroller">
				<!-- 下拉刷新显示 -->
				<slot name="down">
					<!-- 这里要用过渡动画3种状态 -->
					<div class="pull-down-tips" v-show="down != false" :class="{'loading': down.state !== 0, 'down-margin': myScroll === null}">
						<div class="tips-content">
							<div class="unload" v-show="down.state === 0 || down.state === 1">
								<p class="arrow" :class="{'arrow-normal': down.state === 0, 'arrow-rotate': down.state === 1}"></p>
								<p class="tips-text">{{down.state === 1 ? down.notReleaseText : down.initText}}</p>
							</div>
							<div class="onload" v-show="down.state === 2">
								<p class="progress">
									<svg viewBox="0 0 64 64">
										<g stroke-width="4" stroke-linecap="round">
											<line y1="17" y2="29" transform="translate(32,32) rotate(180)">
												<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(210)">
												<animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(240)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(270)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(300)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(330)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(0)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(30)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(60)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(90)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(120)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(150)">
												<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
											</line>
										</g>
									</svg>
								</p>
								<p class="tips-text">{{down.loadingText}}</p>
							</div>
							<div class="last-time-text tips-text" v-if="down.isShowLastTimeText">
								最后更新时间：<em>{{timeDifferenceText}}</em>
							</div>
						</div>
					</div>
				</slot>
				<!-- 数据列表 -->
				<slot name="list" v-if="hasData"></slot>
				<slot name="nodata" v-else>
					<div class="no-data">
						<img src="./imgs/no-collection.png" />
	                	<div class="mt20">{{noDataText}}</div>
                	</div>
				</slot>
				<!-- 上拉加载显示 -->
				<slot name="up" v-if="hasData">
					<!-- 这里要用过渡动画3种状态 -->
					<div class="pull-up-tips" v-show="up != false">
						<div class="tips-content">
							<div class="unload" v-show="up.state === 0 || up.state === 1">
								<p class="arrow" :class="{'arrow-normal': up.state === 0, 'arrow-rotate': up.state === 1}"></p>
								<p class="tips-text">{{up.state === 1 ? up.notReleaseText : up.initText}}</p>
							</div>
							<div class="onload" v-show="up.state === 2">
								<p class="progress">
									<svg viewBox="0 0 64 64">
										<g stroke-width="4" stroke-linecap="round">
											<line y1="17" y2="29" transform="translate(32,32) rotate(180)">
												<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(210)">
												<animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(240)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(270)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(300)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(330)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(0)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(30)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(60)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(90)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(120)">
												<animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
											</line>
											<line y1="17" y2="29" transform="translate(32,32) rotate(150)">
												<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
											</line>
										</g>
									</svg>
								</p>
								<p class="tips-text">{{up.loadingText}}</p>
							</div>
							<div class="no-more" v-show="up.state === 3">
								<p class="icon"></p>
								<p class="tips-text">{{up.noMoreText}}</p>
							</div>
						</div>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
</script>
