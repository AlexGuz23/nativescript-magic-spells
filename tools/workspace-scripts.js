module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...React Native...': {
        script: `npx cowsay "Let's get native โ๏ธ"`,
        description: ` ๐ป React Native`,
      },
      'demo-react-native': {
        clean: {
          script: 'nx run demo-react-native:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-react-native:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-react-native:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@ammarahm-ed/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @ammarahm-ed/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@ammarahm-ed': {
      // @ammarahm-ed/react-native
      'react-native': {
        build: {
          script: 'nx run react-native:build.all',
          description: '@ammarahm-ed/react-native: Build',
        },
      },
      // @ammarahm-ed/react-native-module-test
      'react-native-module-test': {
        build: {
          script: 'nx run react-native-module-test:build.all',
          description: '@ammarahm-ed/react-native-module-test: Build',
        },
      },
      // @ammarahm-ed/react-native-podspecs
      'react-native-podspecs': {
        build: {
          script: 'nx run react-native-podspecs:build.all',
          description: '@ammarahm-ed/react-native-podspecs: Build',
        },
      },
      // @ammarahm-ed/react-native-autolinking
      'react-native-autolinking': {
        build: {
          script: 'nx run react-native-autolinking:build.all',
          description: '@ammarahm-ed/react-native-autolinking: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'react-native': {
        script: 'nx run react-native:focus',
        description: 'Focus on @ammarahm-ed/react-native',
      },
      'react-native-module-test': {
        script: 'nx run react-native-module-test:focus',
        description: 'Focus on @@ammarahm-ed/react-native-module-test',
      },
      'react-native-podspecs': {
        script: 'nx run react-native-podspecs:focus',
        description: 'Focus on @ammarahm-ed/react-native-podspecs',
      },
      'react-native-autolinking': {
        script: 'nx run react-native-autolinking:focus',
        description: 'Focus on @ammarahm-ed/react-native-autolinking',
      },
      reset: {
        script: 'nx g @ammarahm-ed/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
