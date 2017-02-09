'use strict';

import Soy from 'metal-soy';
import {ElectricSearch} from 'electric-components';

import templates from './ElectricSearch.soy';

Soy.register(ElectricSearch, templates);

export default ElectricSearch;
