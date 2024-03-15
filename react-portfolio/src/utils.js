export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};
// taking a relative path which we passed to it and the base url of our website and appending this relative path onto it and
// then passing back whatever this url, making it easier to import images into our different components
