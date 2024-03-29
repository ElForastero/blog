// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  // @ts-expect-error
  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  // @ts-expect-error
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
