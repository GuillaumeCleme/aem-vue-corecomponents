<!--/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~
  ~ Copyright 2021 Guillaume Clement
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/-->
Vue Container (v1)
====
An overlayable Vue.js container for simple application development that does not require a complete SPA framework.

## Features
* Use of a global client-template for Vue
* Embedded Vue.js clientlib
* Embedded wrapper clientlib to support app and component registration
* Support for both HTL and Vue tags (server and client side logic)
* Registrable client library using AEM clientlib basics

### Component Concepts
The following component concepts are used and available for overlays:

1. `applibs.html` - allows overlays to support importing a custom application clientlib. See an [example](https://github.com/GuillaumeCleme/aem-vue-corecomponents/tree/master/ui.samples/src/main/content/jcr_root/apps/vuecore-samples/components/sampleapp).
2. `cq:design_dialog` - imported from a `sling:resourceSuperType` of `core/wcm/components/container/v1/container`
3. `cq:dialog` - defines the Authoring Dialog options using AEM defaults
4. `vuecontainer.html` - defines the Vue application to be rendered and where Vue components can be placed. See a component [example](https://github.com/GuillaumeCleme/aem-vue-corecomponents/tree/master/ui.samples/src/main/content/jcr_root/apps/vuecore-samples/components/samplebutton).
5. `vuelibs.html` - default clientlib imports for Vue and wrapper libraries

### Edit Dialog Properties
The following properties are written to JCR for this Container component and are expected to be available as `Resource` properties:

#### Container Properties
1. `./layout` - defines the layout type, either `simple` (default) or `responsiveGrid`; if no value is defined, the component will fallback to the value defined by the component's policy

#### Common Properties
1. `./backgroundImageReference` - defines the container background image.
2. `./backgroundColor` - defines the container background color.

#### Accessibility
1. `./accessibilityLabel` - defines an accessibility label for the container.
2. `./roleAttribute` - defines a role attribute for the container.

### Enabling Container Editing Functionality
The following property is required in the proxy component to enable full editing functionality for the Container:

1. `./cq:isContainer` - set to `{Boolean}true`, marks the Container as a container component

## Information
* **Author**: [Guillaume Clement](https://github.com/GuillaumeCleme)
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Status**: production-ready
* **Documentation**: [https://github.com/GuillaumeCleme/aem-vue-corecomponents](https://github.com/GuillaumeCleme/aem-vue-corecomponents)
* **AEM Core Components Container Documentation**: [https://www.adobe.com/go/aem\_cmp\_container\_v1](https://www.adobe.com/go/aem_cmp_container_v1)

_If you were involved in the authoring of this component and are not credited above, please reach out to me on [GitHub](https://github.com/GuillaumeCleme/aem-vue-corecomponents)._
