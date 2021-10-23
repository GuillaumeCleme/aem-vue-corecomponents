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
Vue Component (v1)
====
An overlayable Vue.js AEM component for simple application development that does not require a complete SPA framework.

## Features
* Use of a global client-template for Vue
* Support for both HTL and Vue tags (server and client side logic)
* Registrable client library using AEM clientlib basics

### Component Concepts
The following component concepts are used and available for overlays:

1. `clientlib` - defines the components JS and CSS libraries where styles and application logic is contained. See an [example](https://github.com/GuillaumeCleme/aem-vue-corecomponents/tree/master/ui.samples/src/main/content/jcr_root/apps/vuecore-samples/components/samplebutton).
2. `cq:design_dialog` - defines the Design Dialog options using AEM defaults
3. `cq:dialog` - defines the Authoring Dialog options using AEM defaults
4. `template.html` - defines the Vue component client template
2. `vuecomponent.html` - defines the Vue component to be rendered and placed within a [Vue Container](https://github.com/GuillaumeCleme/aem-vue-corecomponents/tree/master/ui.apps/src/main/content/jcr_root/apps/vuecore/components/vuecontainer).

### Edit Dialog Properties
The following properties are written to JCR for the Vue component and are expected to be available as `Resource` properties:

1. `./jcr:title` - defines the component title

## Information
* **Author**: [Guillaume Clement](https://github.com/GuillaumeCleme)
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Status**: production-ready
* **Documentation**: [https://github.com/GuillaumeCleme/aem-vue-corecomponents](https://github.com/GuillaumeCleme/aem-vue-corecomponents)

_If you were involved in the authoring of this component and are not credited above, please reach out to me on [GitHub](https://github.com/GuillaumeCleme/aem-vue-corecomponents)._
