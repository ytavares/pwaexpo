export default ({ config }) => {
  return {
      ...config,
      plugins: [
        [
          "expo-camera",
          {
            "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera."
          }
        ]
          
      ],
  };
};