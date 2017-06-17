/*
 * CoreShop.
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015-2017 Dominik Pfaffenbauer (https://www.pfaffenbauer.at)
 * @license    https://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 *
 */

pimcore.registerNS('coreshop.shipping.resource');
coreshop.shipping.resource = Class.create(coreshop.resource, {
    initialize: function () {
        coreshop.resource.global.addStore('coreshop_carriers', 'coreshop/carriers');
        coreshop.resource.global.addStore('coreshop_carrier_shipping_rules', 'coreshop/shipping_rules');

        pimcore.globalmanager.get('coreshop_carriers').load();
    }
});

new coreshop.shipping.resource();