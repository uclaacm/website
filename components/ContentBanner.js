

function ContentBanner({ title }) {
  return (
    <div className="full-width blue">
      <div id="banner-right" className="full-width">
        <h2 style={{ fontSize: '1.6em' }}>{title}</h2>
      </div>
    </div>
  );
}

export default ContentBanner;
