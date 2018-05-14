import React, { Component } from 'react';
import { withRouter } from 'react-router';
import config from '@config/'
import Helmet from 'react-helmet';
import { toArray } from 'react-emoji-render'

const defaultUrl = config.url.default;
const defaultTitle = config.meta.title.default;
const defaultDescription = config.meta.title.description;
const defaultImage = `${defaultUrl}${config.meta.image}`;
const defaultTwitter = config.meta.twitter;
const defaultSep = config.meta.title.separator;

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags
    }
  ) {
    const theTitle = title
      ? title
      : defaultTitle;
    const theDescription = description
      ? description
      : defaultDescription;
    const theImage = image ? `${defaultUrl}${image}` : defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: defaultUrl },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: 'xxx' }
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;
    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
          }}
          link={[
            {
              rel: 'canonical',
              href: defaultUrl
            }
          ]}
          meta={this.getMetaTags(rest)}>
        <title>
          {toArray(rest.title ? rest.title : defaultTitle).map((content, index) => {
            if (typeof content === 'string') {return content}
            if (typeof content !== 'string') {return content.props.children}
          })}
        </title>
      </Helmet>
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
