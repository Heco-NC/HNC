import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '简介',
    Svg: require('../../static/img/logo_623x425.svg').default,
    description: (
      <>
      HNC(<a href="https://hecoinfo.com/token/0x144a9252f91bddb375bb09cb51a3a6e4f199289b" target="_blank">0x144a9252f91bddb375bb09cb51a3a6e4f199289b</a>
      )发行于HECO生态链，
        总额100亿，80%进入流动池，14%用于空投，6%项目方保留。
        HNC作为Heco New Coin电报群的平台唯一权益凭证，
        持有代币则享有平台的提案、投票及治理权，且HNC作为平台唯一宣传支付凭证。
      </>
    ),
  },
  {
    title: '鼓励',
    Svg: require('../../static/img/trade.svg').default,
    description: (
      <>
        HNC鼓励持币地址参与交易，做波段获取收益是一种智慧。
        不管买入还是卖出，只有流动性才能带来生机。
        为了奖励交易地址，每次项目方收到宣传支付的HNC后，
        将拿出90%用于奖励交易地址，规则详见白皮书。
      </>
    ),
  },
  {
    title: '选择',
    Svg: require('../../static/img/dogeswap.svg').default,
    description: (
      <>
        Dogeswap并不是为HNC背书的平台，选择Dogeswap的主要原因是
        Dogeswap对新项目支持力度很大。HNC持币地址和价值达到一定规模后，
        可向Dogeswap申请单币质押挖矿和LP流动性挖矿，
        进一步提升持币地址的收益。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
