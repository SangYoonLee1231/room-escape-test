import React, { useEffect } from 'react';

export const infeedProps = {
  format: 'auto',
  layoutKey: '',
  client: 'ca-pub-1919598055512436',
  slot: '1197662171',
  responsive: 'true',
};

/*
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
     crossorigin="anonymous"></script>
<!-- contents/responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1919598055512436"
     data-ad-slot="1197662171"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
*/

const GoogleAd = ({
  className = 'adsbygoogle',
  client = 'ca-pub-1919598055512436',
  slot = '1197662171',
  format = 'auto',
  responsive = 'true',
  layoutKey = '',
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log('Advertise is pushed');
    } catch (e) {
      if (process.env.NODE_ENV !== 'production')
        console.error('AdvertiseError', e);
    }
  }, []);
  return (
    <ins
      className={className}
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'block',
        textAlign: 'center',
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-ad-layout-key={layoutKey}
    />
  );
};

export default GoogleAd;
