window.config = {
  routerBasename: '/',
  servers: {
    dicomWeb: [
      {
        name: 'Orthanc on Render',
        wadoUriRoot: '',
        qidoRoot: 'https://orthanc-render.onrender.com/dicom-web',
        wadoRoot: 'https://orthanc-render.onrender.com/dicom-web',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          requestFromBrowser: true,
        },
      },
    ],
  },
  showStudyList: true,
  omitQuotationForNonStringValues: true,
};
