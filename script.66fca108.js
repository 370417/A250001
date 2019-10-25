// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.ts":[function(require,module,exports) {
"use strict";
/** This file contains the raw data and performs any necessary preprocessing. */

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Every four elements of data represent a pattern of four overlapping circles.
 * rawData.length == 448, so 112 patterns are represented.
 * They are arranged in 9 rows; rows alternate 12 and 13 columns.
 * Rows and columns appear to be spaced 400 columns apart.
 *
 * Data from Jon Wild's https://oeis.org/A250001/a250001.svg
 */

var rawData = [{
  cx: 485.523676,
  cy: 267.361350,
  r: 89.585970
}, {
  cx: 403.198577,
  cy: 171.206007,
  r: 55.089333
}, {
  cx: 396.959929,
  cy: 123.300408,
  r: 91.474884
}, {
  cx: 316.476387,
  cy: 274.262170,
  r: 91.589731
}, {
  cx: 750.773477,
  cy: 184.712960,
  r: 125.894450
}, {
  cx: 870.147095,
  cy: 226.416349,
  r: 51.029130
}, {
  cx: 848.565601,
  cy: 214.445115,
  r: 126.321001
}, {
  cx: 728.200186,
  cy: 173.318277,
  r: 50.695139
}, {
  cx: 1285.496426,
  cy: 275.159863,
  r: 89.276664
}, {
  cx: 1198.889752,
  cy: 255.911225,
  r: 47.329023
}, {
  cx: 1112.857435,
  cy: 273.340223,
  r: 88.169952
}, {
  cx: 1199.655673,
  cy: 124.049772,
  r: 89.356293
}, {
  cx: 1591.463855,
  cy: 119.242693,
  r: 94.543370
}, {
  cx: 1516.744436,
  cy: 218.636018,
  r: 91.916930
}, {
  cx: 1576.675280,
  cy: 240.914290,
  r: 33.785520
}, {
  cx: 1680.424970,
  cy: 279.431582,
  r: 94.451879
}, {
  cx: 2069.467078,
  cy: 208.522302,
  r: 105.720991
}, {
  cx: 1992.724930,
  cy: 199.273218,
  r: 91.166112
}, {
  cx: 1914.061271,
  cy: 189.823182,
  r: 89.180176
}, {
  cx: 1992.729177,
  cy: 199.479715,
  r: 129.592294
}, {
  cx: 2394.118755,
  cy: 148.140176,
  r: 112.200377
}, {
  cx: 2454.623636,
  cy: 242.853156,
  r: 60.446299
}, {
  cx: 2340.067964,
  cy: 247.786080,
  r: 115.110840
}, {
  cx: 2454.112500,
  cy: 243.101023,
  r: 120.949218
}, {
  cx: 2801.274627,
  cy: 217.149915,
  r: 53.680254
}, {
  cx: 2831.853871,
  cy: 185.342319,
  r: 84.282929
}, {
  cx: 2855.314683,
  cy: 138.437770,
  r: 113.488129
}, {
  cx: 2743.263179,
  cy: 261.712228,
  r: 113.342436
}, {
  cx: 3112.772361,
  cy: 251.286100,
  r: 62.804824
}, {
  cx: 3166.816222,
  cy: 131.507401,
  r: 106.519214
}, {
  cx: 3198.738725,
  cy: 177.575664,
  r: 55.388080
}, {
  cx: 3253.943840,
  cy: 280.342380,
  r: 94.766832
}, {
  cx: 3515.412495,
  cy: 273.938802,
  r: 90.634317
}, {
  cx: 3684.532014,
  cy: 268.821788,
  r: 90.324005
}, {
  cx: 3600.005301,
  cy: 252.117847,
  r: 25.648277
}, {
  cx: 3595.916604,
  cy: 124.502437,
  r: 90.590702
}, {
  cx: 4031.561888,
  cy: 257.185498,
  r: 117.803418
}, {
  cx: 3967.276029,
  cy: 142.283092,
  r: 117.381935
}, {
  cx: 3989.075961,
  cy: 205.039418,
  r: 73.504781
}, {
  cx: 3982.906266,
  cy: 208.955182,
  r: 103.466477
}, {
  cx: 4432.766178,
  cy: 133.890263,
  r: 109.011513
}, {
  cx: 4374.538261,
  cy: 226.461564,
  r: 131.551372
}, {
  cx: 4398.725738,
  cy: 237.452063,
  r: 52.243579
}, {
  cx: 4424.263325,
  cy: 243.471131,
  r: 131.576861
}, {
  cx: 4727.873019,
  cy: 218.015756,
  r: 103.027033
}, {
  cx: 4820.733408,
  cy: 153.119670,
  r: 128.282483
}, {
  cx: 4877.344076,
  cy: 212.295318,
  r: 72.087664
}, {
  cx: 4813.196178,
  cy: 212.057756,
  r: 161.721244
}, {
  cx: 128.196384,
  cy: 649.720954,
  r: 73.091706
}, {
  cx: 211.156574,
  cy: 581.238130,
  r: 101.790135
}, {
  cx: 100.629890,
  cy: 583.673359,
  r: 75.669271
}, {
  cx: 307.173412,
  cy: 543.894755,
  r: 68.003706
}, {
  cx: 538.911455,
  cy: 625.453718,
  r: 113.914038
}, {
  cx: 660.845547,
  cy: 588.717517,
  r: 114.317017
}, {
  cx: 599.644250,
  cy: 607.173110,
  r: 78.969481
}, {
  cx: 573.776431,
  cy: 545.878273,
  r: 87.044042
}, {
  cx: 939.954023,
  cy: 648.732152,
  r: 115.080666
}, {
  cx: 1031.669755,
  cy: 578.440748,
  r: 95.245873
}, {
  cx: 1031.499507,
  cy: 578.069202,
  r: 47.730004
}, {
  cx: 1031.887555,
  cy: 577.952893,
  r: 142.990288
}, {
  cx: 1400.482881,
  cy: 622.670014,
  r: 16.579387
}, {
  cx: 1402.522158,
  cy: 523.251482,
  r: 89.566852
}, {
  cx: 1485.616958,
  cy: 674.731198,
  r: 89.644558
}, {
  cx: 1313.862673,
  cy: 670.623360,
  r: 88.865326
}, {
  cx: 1826.743512,
  cy: 513.502144,
  r: 81.674924
}, {
  cx: 1811.856027,
  cy: 535.635319,
  r: 91.178344
}, {
  cx: 1884.420577,
  cy: 663.000329,
  r: 90.476200
}, {
  cx: 1715.512906,
  cy: 675.815660,
  r: 90.708666
}, {
  cx: 2125.337196,
  cy: 654.850984,
  r: 100.293332
}, {
  cx: 2177.508085,
  cy: 670.827487,
  r: 100.280752
}, {
  cx: 2275.020591,
  cy: 527.917304,
  r: 100.218763
}, {
  cx: 2240.643232,
  cy: 620.965118,
  r: 24.138430
}, {
  cx: 2662.141697,
  cy: 602.200647,
  r: 112.855321
}, {
  cx: 2599.095091,
  cy: 618.403597,
  r: 65.450528
}, {
  cx: 2537.785916,
  cy: 595.871731,
  r: 113.034322
}, {
  cx: 2602.434603,
  cy: 553.480531,
  r: 18.080308
}, {
  cx: 2950.525375,
  cy: 523.755512,
  r: 99.060787
}, {
  cx: 3048.485879,
  cy: 675.826678,
  r: 99.163433
}, {
  cx: 3039.778736,
  cy: 608.024918,
  r: 27.251311
}, {
  cx: 2993.277892,
  cy: 620.261300,
  r: 24.383100
}, {
  cx: 3294.974768,
  cy: 583.044144,
  r: 70.033433
}, {
  cx: 3337.390594,
  cy: 591.163400,
  r: 78.223445
}, {
  cx: 3406.240485,
  cy: 603.761214,
  r: 78.065780
}, {
  cx: 3511.524073,
  cy: 621.558939,
  r: 63.627105
}, {
  cx: 3718.658161,
  cy: 598.825911,
  r: 93.767701
}, {
  cx: 3854.002323,
  cy: 600.086699,
  r: 121.094765
}, {
  cx: 3849.642333,
  cy: 599.128126,
  r: 76.400704
}, {
  cx: 3781.394271,
  cy: 598.946817,
  r: 107.907911
}, {
  cx: 4126.326984,
  cy: 650.816441,
  r: 86.592733
}, {
  cx: 4213.686009,
  cy: 627.773067,
  r: 100.994152
}, {
  cx: 4243.586582,
  cy: 525.943353,
  r: 101.046528
}, {
  cx: 4274.415578,
  cy: 691.453080,
  r: 83.655223
}, {
  cx: 4648.683383,
  cy: 654.298986,
  r: 120.756279
}, {
  cx: 4617.443099,
  cy: 594.328637,
  r: 147.704234
}, {
  cx: 4506.386146,
  cy: 589.678672,
  r: 77.443297
}, {
  cx: 4679.603069,
  cy: 501.325046,
  r: 76.380755
}, {
  cx: 4944.636812,
  cy: 666.232350,
  r: 108.640988
}, {
  cx: 5048.012996,
  cy: 536.253181,
  r: 111.388706
}, {
  cx: 5021.285909,
  cy: 621.486093,
  r: 141.980190
}, {
  cx: 5036.013625,
  cy: 633.487872,
  r: 68.546836
}, {
  cx: 431.019627,
  cy: 967.214097,
  r: 107.500110
}, {
  cx: 451.609068,
  cy: 1016.213419,
  r: 74.516069
}, {
  cx: 452.843260,
  cy: 1068.493017,
  r: 106.816734
}, {
  cx: 338.547509,
  cy: 923.021429,
  r: 98.266664
}, {
  cx: 796.833747,
  cy: 1016.499835,
  r: 77.646356
}, {
  cx: 855.946633,
  cy: 1005.562745,
  r: 119.065059
}, {
  cx: 807.442996,
  cy: 919.209326,
  r: 39.109639
}, {
  cx: 742.773730,
  cy: 992.701621,
  r: 117.942296
}, {
  cx: 1209.535790,
  cy: 999.554338,
  r: 67.351372
}, {
  cx: 1151.175370,
  cy: 997.779812,
  r: 107.942879
}, {
  cx: 1128.862068,
  cy: 996.985116,
  r: 104.015706
}, {
  cx: 1267.402192,
  cy: 1001.340257,
  r: 107.464597
}, {
  cx: 1672.843786,
  cy: 1042.851352,
  r: 102.188503
}, {
  cx: 1522.906673,
  cy: 1047.857437,
  r: 97.992052
}, {
  cx: 1590.485785,
  cy: 952.147487,
  r: 102.189780
}, {
  cx: 1596.761255,
  cy: 1045.697918,
  r: 102.983244
}, {
  cx: 2068.240590,
  cy: 1000.976025,
  r: 106.977519
}, {
  cx: 1932.048244,
  cy: 998.881611,
  r: 107.065055
}, {
  cx: 2000.285285,
  cy: 1000.022316,
  r: 65.660771
}, {
  cx: 2002.379342,
  cy: 998.799560,
  r: 105.706651
}, {
  cx: 2485.479233,
  cy: 1072.068665,
  r: 89.453773
}, {
  cx: 2407.453751,
  cy: 1028.346560,
  r: 7.305591
}, {
  cx: 2397.631264,
  cy: 924.923990,
  r: 89.263298
}, {
  cx: 2314.121420,
  cy: 1073.952495,
  r: 89.244385
}, {
  cx: 2799.452238,
  cy: 1081.446284,
  r: 93.727045
}, {
  cx: 2784.984478,
  cy: 1003.322585,
  r: 15.841281
}, {
  cx: 2798.957618,
  cy: 910.496937,
  r: 85.571341
}, {
  cx: 2814.005767,
  cy: 1002.217533,
  r: 14.742578
}, {
  cx: 3258.572094,
  cy: 983.268639,
  r: 116.525510
}, {
  cx: 3203.619849,
  cy: 1009.595265,
  r: 78.070149
}, {
  cx: 3142.331797,
  cy: 1015.023960,
  r: 117.444495
}, {
  cx: 3197.797352,
  cy: 988.142463,
  r: 77.895442
}, {
  cx: 3673.339757,
  cy: 995.690246,
  r: 101.629951
}, {
  cx: 3546.825952,
  cy: 1001.155232,
  r: 121.879796
}, {
  cx: 3571.556924,
  cy: 1001.095652,
  r: 48.917341
}, {
  cx: 3600.271370,
  cy: 999.187607,
  r: 126.375765
}, {
  cx: 4059.989937,
  cy: 916.477767,
  r: 91.507302
}, {
  cx: 4039.253156,
  cy: 962.269641,
  r: 92.250148
}, {
  cx: 4076.112595,
  cy: 1082.696207,
  r: 92.444769
}, {
  cx: 3923.408110,
  cy: 1012.722165,
  r: 92.448293
}, {
  cx: 4467.829232,
  cy: 975.534022,
  r: 107.345079
}, {
  cx: 4395.482718,
  cy: 993.756201,
  r: 89.041009
}, {
  cx: 4337.057938,
  cy: 1008.689006,
  r: 69.745204
}, {
  cx: 4375.909745,
  cy: 999.872970,
  r: 150.926796
}, {
  cx: 4883.336926,
  cy: 1050.249663,
  r: 91.536128
}, {
  cx: 4792.763704,
  cy: 924.074059,
  r: 91.210512
}, {
  cx: 4812.292668,
  cy: 951.762550,
  r: 43.555514
}, {
  cx: 4716.014016,
  cy: 1074.491547,
  r: 91.267486
}, {
  cx: 261.012773,
  cy: 1388.583608,
  r: 113.850180
}, {
  cx: 139.211180,
  cy: 1408.640082,
  r: 114.374401
}, {
  cx: 190.229869,
  cy: 1340.654407,
  r: 111.765003
}, {
  cx: 210.182389,
  cy: 1457.130827,
  r: 112.161219
}, {
  cx: 613.861467,
  cy: 1345.906698,
  r: 33.002808
}, {
  cx: 538.640484,
  cy: 1405.192509,
  r: 113.837171
}, {
  cx: 600.437913,
  cy: 1426.338143,
  r: 63.646052
}, {
  cx: 659.509315,
  cy: 1395.325813,
  r: 115.443339
}, {
  cx: 1070.817590,
  cy: 1458.156527,
  r: 104.212287
}, {
  cx: 996.536347,
  cy: 1424.748705,
  r: 139.140524
}, {
  cx: 919.506860,
  cy: 1472.996646,
  r: 94.714854
}, {
  cx: 963.045799,
  cy: 1284.070736,
  r: 52.298672
}, {
  cx: 1409.693636,
  cy: 1507.481616,
  r: 67.826094
}, {
  cx: 1461.427632,
  cy: 1394.736864,
  r: 68.740449
}, {
  cx: 1337.343061,
  cy: 1406.817354,
  r: 68.652145
}, {
  cx: 1388.835552,
  cy: 1293.413698,
  r: 68.444923
}, {
  cx: 1716.387717,
  cy: 1437.805991,
  r: 91.392034
}, {
  cx: 1805.161155,
  cy: 1350.342266,
  r: 91.350158
}, {
  cx: 1807.908573,
  cy: 1334.847642,
  r: 60.528755
}, {
  cx: 1884.098662,
  cy: 1449.141624,
  r: 90.925154
}, {
  cx: 2133.194991,
  cy: 1401.951562,
  r: 108.386247
}, {
  cx: 2199.959271,
  cy: 1398.966358,
  r: 74.956028
}, {
  cx: 2266.627459,
  cy: 1395.985737,
  r: 108.243054
}, {
  cx: 2199.977885,
  cy: 1398.802769,
  r: 58.204484
}, {
  cx: 2536.623769,
  cy: 1403.145064,
  r: 111.836498
}, {
  cx: 2671.001783,
  cy: 1395.657498,
  r: 81.097211
}, {
  cx: 2660.191061,
  cy: 1397.617520,
  r: 114.796233
}, {
  cx: 2619.306463,
  cy: 1398.641167,
  r: 51.502279
}, {
  cx: 2925.952083,
  cy: 1436.023984,
  r: 100.973149
}, {
  cx: 3022.208496,
  cy: 1323.508152,
  r: 95.538408
}, {
  cx: 3007.171910,
  cy: 1412.176895,
  r: 142.059328
}, {
  cx: 3068.764632,
  cy: 1463.846558,
  r: 106.268693
}, {
  cx: 3399.900163,
  cy: 1427.516849,
  r: 20.889298
}, {
  cx: 3484.442029,
  cy: 1474.370684,
  r: 90.380255
}, {
  cx: 3316.655201,
  cy: 1478.675097,
  r: 91.837097
}, {
  cx: 3398.300149,
  cy: 1320.389613,
  r: 91.645173
}, {
  cx: 3850.693580,
  cy: 1355.385285,
  r: 124.390085
}, {
  cx: 3806.473949,
  cy: 1407.556010,
  r: 81.185450
}, {
  cx: 3749.270741,
  cy: 1444.573070,
  r: 124.345776
}, {
  cx: 3804.036362,
  cy: 1344.925055,
  r: 50.733604
}, {
  cx: 4297.093722,
  cy: 1402.172246,
  r: 77.662509
}, {
  cx: 4226.604982,
  cy: 1400.810257,
  r: 96.381630
}, {
  cx: 4167.985550,
  cy: 1399.282828,
  r: 96.088439
}, {
  cx: 4099.782043,
  cy: 1399.089661,
  r: 75.060933
}, {
  cx: 4674.071035,
  cy: 1397.774052,
  r: 100.822754
}, {
  cx: 4600.667341,
  cy: 1432.468627,
  r: 28.717370
}, {
  cx: 4525.803271,
  cy: 1400.355491,
  r: 101.013115
}, {
  cx: 4599.325960,
  cy: 1365.747552,
  r: 28.788692
}, {
  cx: 5001.317534,
  cy: 1318.305519,
  r: 90.315433
}, {
  cx: 4915.242696,
  cy: 1433.603446,
  r: 90.295116
}, {
  cx: 4941.354903,
  cy: 1480.933193,
  r: 90.154212
}, {
  cx: 5084.838867,
  cy: 1470.498269,
  r: 90.436575
}, {
  cx: 397.662313,
  cy: 1828.015880,
  r: 12.487413
}, {
  cx: 313.729070,
  cy: 1875.188945,
  r: 89.073641
}, {
  cx: 485.969499,
  cy: 1865.486168,
  r: 88.729517
}, {
  cx: 392.008575,
  cy: 1721.997515,
  r: 88.311274
}, {
  cx: 851.189987,
  cy: 1882.889962,
  r: 91.937900
}, {
  cx: 792.073406,
  cy: 1825.847617,
  r: 74.129378
}, {
  cx: 722.284504,
  cy: 1784.132027,
  r: 86.501819
}, {
  cx: 870.767818,
  cy: 1717.309043,
  r: 92.533406
}, {
  cx: 1128.991439,
  cy: 1798.839001,
  r: 104.041342
}, {
  cx: 1271.402221,
  cy: 1799.393617,
  r: 103.601632
}, {
  cx: 1220.999939,
  cy: 1747.789208,
  r: 16.216110
}, {
  cx: 1200.325485,
  cy: 1820.490456,
  r: 44.394679
}, {
  cx: 1603.730721,
  cy: 1770.831114,
  r: 32.147633
}, {
  cx: 1526.891925,
  cy: 1794.860949,
  r: 102.081588
}, {
  cx: 1599.399839,
  cy: 1826.414696,
  r: 35.321383
}, {
  cx: 1674.566626,
  cy: 1805.541167,
  r: 100.400372
}, {
  cx: 2000.383017,
  cy: 1825.361050,
  r: 118.608948
}, {
  cx: 1894.628634,
  cy: 1880.191638,
  r: 69.761511
}, {
  cx: 2006.019546,
  cy: 1706.378377,
  r: 68.591640
}, {
  cx: 2103.679352,
  cy: 1889.992324,
  r: 71.235625
}, {
  cx: 2457.341845,
  cy: 1741.267724,
  r: 96.297949
}, {
  cx: 2341.308214,
  cy: 1721.451459,
  r: 96.607579
}, {
  cx: 2373.575736,
  cy: 1883.585187,
  r: 91.509947
}, {
  cx: 2401.198431,
  cy: 1721.012713,
  r: 55.037055
}, {
  cx: 2740.077330,
  cy: 1861.678748,
  r: 113.145800
}, {
  cx: 2854.060784,
  cy: 1803.299528,
  r: 118.572586
}, {
  cx: 2847.705640,
  cy: 1826.055245,
  r: 47.726855
}, {
  cx: 2890.240717,
  cy: 1680.979188,
  r: 56.211450
}, {
  cx: 3140.991291,
  cy: 1824.416114,
  r: 63.919582
}, {
  cx: 3117.378466,
  cy: 1852.524978,
  r: 92.405086
}, {
  cx: 3283.007386,
  cy: 1880.082694,
  r: 92.336118
}, {
  cx: 3202.322904,
  cy: 1718.130433,
  r: 92.370937
}, {
  cx: 3588.193396,
  cy: 1799.740746,
  r: 93.751116
}, {
  cx: 3681.902019,
  cy: 1800.270714,
  r: 45.914272
}, {
  cx: 3682.131908,
  cy: 1800.770306,
  r: 92.894481
}, {
  cx: 3482.769046,
  cy: 1802.289251,
  r: 57.846328
}, {
  cx: 4062.063263,
  cy: 1812.620287,
  r: 113.046712
}, {
  cx: 3937.732336,
  cy: 1786.759922,
  r: 93.279530
}, {
  cx: 3937.765205,
  cy: 1786.757658,
  r: 112.770348
}, {
  cx: 3999.785169,
  cy: 1799.844268,
  r: 68.710649
}, {
  cx: 4331.157136,
  cy: 1744.306968,
  r: 106.366588
}, {
  cx: 4475.602456,
  cy: 1836.581983,
  r: 99.667443
}, {
  cx: 4452.312319,
  cy: 1863.587394,
  r: 73.252343
}, {
  cx: 4403.788575,
  cy: 1845.790429,
  r: 115.621831
}, {
  cx: 4814.698342,
  cy: 1799.331292,
  r: 105.147449
}, {
  cx: 4709.820041,
  cy: 1806.332405,
  r: 42.255897
}, {
  cx: 4730.533125,
  cy: 1803.163229,
  r: 105.721261
}, {
  cx: 4883.719887,
  cy: 1781.955646,
  r: 91.135926
}, {
  cx: 184.081378,
  cy: 2192.713973,
  r: 3.944654
}, {
  cx: 135.529897,
  cy: 2226.993613,
  r: 60.679181
}, {
  cx: 182.461518,
  cy: 2285.433015,
  r: 89.672085
}, {
  cx: 234.035669,
  cy: 2114.616970,
  r: 89.647042
}, {
  cx: 666.974615,
  cy: 2199.159678,
  r: 108.162199
}, {
  cx: 589.911741,
  cy: 2199.312845,
  r: 71.372687
}, {
  cx: 533.189924,
  cy: 2199.329552,
  r: 108.203289
}, {
  cx: 571.010306,
  cy: 2199.644292,
  r: 32.551277
}, {
  cx: 938.496292,
  cy: 2189.475895,
  r: 113.726603
}, {
  cx: 1061.931430,
  cy: 2209.250389,
  r: 112.976110
}, {
  cx: 1074.862775,
  cy: 2128.557785,
  r: 50.309174
}, {
  cx: 996.376398,
  cy: 2225.811395,
  r: 60.008740
}, {
  cx: 1455.935481,
  cy: 2196.532807,
  r: 70.814466
}, {
  cx: 1401.899023,
  cy: 2142.407367,
  r: 117.495819
}, {
  cx: 1344.780405,
  cy: 2193.197301,
  r: 70.843942
}, {
  cx: 1399.870134,
  cy: 2215.075131,
  r: 159.894209
}, {
  cx: 1729.826398,
  cy: 2201.272731,
  r: 105.055066
}, {
  cx: 1802.961819,
  cy: 2169.980656,
  r: 42.804007
}, {
  cx: 1869.251348,
  cy: 2198.404296,
  r: 105.558623
}, {
  cx: 1807.419278,
  cy: 2224.342812,
  r: 47.763723
}, {
  cx: 2290.497533,
  cy: 2154.011576,
  r: 84.446751
}, {
  cx: 2201.099498,
  cy: 2228.367047,
  r: 140.045148
}, {
  cx: 2127.199071,
  cy: 2155.864077,
  r: 102.394977
}, {
  cx: 2200.368612,
  cy: 2187.816020,
  r: 157.952837
}, {
  cx: 2535.051555,
  cy: 2208.171842,
  r: 42.232131
}, {
  cx: 2598.693455,
  cy: 2199.237033,
  r: 80.062214
}, {
  cx: 2662.245289,
  cy: 2188.736399,
  r: 112.842004
}, {
  cx: 2539.194930,
  cy: 2208.973138,
  r: 114.279016
}, {
  cx: 3060.737125,
  cy: 2177.911039,
  r: 114.061834
}, {
  cx: 2959.165292,
  cy: 2230.936729,
  r: 52.565823
}, {
  cx: 2955.599478,
  cy: 2205.116011,
  r: 130.822950
}, {
  cx: 2946.768379,
  cy: 2179.959335,
  r: 52.116668
}, {
  cx: 3301.662160,
  cy: 2213.236128,
  r: 76.763373
}, {
  cx: 3411.898601,
  cy: 2199.099014,
  r: 88.138822
}, {
  cx: 3464.525443,
  cy: 2192.323625,
  r: 110.475119
}, {
  cx: 3365.951282,
  cy: 2205.041219,
  r: 111.114371
}, {
  cx: 3916.796786,
  cy: 2164.513365,
  r: 58.097958
}, {
  cx: 3852.906870,
  cy: 2161.851996,
  r: 53.584748
}, {
  cx: 3768.460591,
  cy: 2199.434545,
  r: 143.624086
}, {
  cx: 3887.108380,
  cy: 2181.900620,
  r: 26.188817
}, {
  cx: 4195.260699,
  cy: 2142.867944,
  r: 77.174330
}, {
  cx: 4245.700669,
  cy: 2172.618158,
  r: 92.114823
}, {
  cx: 4303.509934,
  cy: 2169.630972,
  r: 71.472932
}, {
  cx: 4116.532952,
  cy: 2241.966872,
  r: 91.861439
}, {
  cx: 4656.235904,
  cy: 2235.064291,
  r: 68.643348
}, {
  cx: 4560.544228,
  cy: 2175.484032,
  r: 135.618837
}, {
  cx: 4597.825786,
  cy: 2199.004284,
  r: 45.714884
}, {
  cx: 4637.830419,
  cy: 2221.479261,
  r: 137.261095
}, {
  cx: 4918.524762,
  cy: 2167.545528,
  r: 93.657862
}, {
  cx: 5014.079859,
  cy: 2183.488130,
  r: 99.753058
}, {
  cx: 5073.484664,
  cy: 2222.470972,
  r: 101.538255
}, {
  cx: 4966.626943,
  cy: 2194.161870,
  r: 117.589149
}, {
  cx: 409.809786,
  cy: 2663.759594,
  r: 111.893156
}, {
  cx: 392.573071,
  cy: 2583.183214,
  r: 79.818612
}, {
  cx: 387.381153,
  cy: 2537.153153,
  r: 111.856115
}, {
  cx: 405.531680,
  cy: 2606.117642,
  r: 68.490843
}, {
  cx: 873.049567,
  cy: 2616.090940,
  r: 101.771379
}, {
  cx: 805.849095,
  cy: 2574.211801,
  r: 129.358286
}, {
  cx: 725.779792,
  cy: 2580.029613,
  r: 100.982687
}, {
  cx: 792.366980,
  cy: 2623.673477,
  r: 129.325723
}, {
  cx: 1269.956056,
  cy: 2673.094977,
  r: 101.757499
}, {
  cx: 1183.867045,
  cy: 2583.968639,
  r: 110.619542
}, {
  cx: 1184.000018,
  cy: 2583.875670,
  r: 66.416328
}, {
  cx: 1110.305577,
  cy: 2508.236562,
  r: 83.453363
}, {
  cx: 1666.294857,
  cy: 2605.369178,
  r: 108.871861
}, {
  cx: 1579.018781,
  cy: 2598.115081,
  r: 80.713266
}, {
  cx: 1534.757580,
  cy: 2594.545677,
  r: 109.810760
}, {
  cx: 1608.591416,
  cy: 2600.532306,
  r: 62.724676
}, {
  cx: 1959.917285,
  cy: 2679.834430,
  r: 86.928958
}, {
  cx: 2006.846964,
  cy: 2538.233967,
  r: 113.310906
}, {
  cx: 2000.802218,
  cy: 2602.187214,
  r: 125.081015
}, {
  cx: 2025.018436,
  cy: 2687.113175,
  r: 87.873866
}, {
  cx: 2421.013170,
  cy: 2519.610758,
  r: 91.913965
}, {
  cx: 2429.736177,
  cy: 2543.632373,
  r: 80.892131
}, {
  cx: 2483.122417,
  cy: 2679.246517,
  r: 91.850068
}, {
  cx: 2315.305316,
  cy: 2652.795880,
  r: 90.571121
}, {
  cx: 2851.701571,
  cy: 2679.579544,
  r: 95.401253
}, {
  cx: 2760.509930,
  cy: 2587.994536,
  r: 69.029387
}, {
  cx: 2780.965722,
  cy: 2531.981754,
  r: 107.136966
}, {
  cx: 2761.380592,
  cy: 2648.630519,
  r: 109.496915
}, {
  cx: 3195.964520,
  cy: 2531.931773,
  r: 106.984054
}, {
  cx: 3202.220623,
  cy: 2668.194233,
  r: 106.968534
}, {
  cx: 3246.602444,
  cy: 2670.104088,
  r: 51.376439
}, {
  cx: 3156.553857,
  cy: 2672.212961,
  r: 49.895067
}, {
  cx: 3504.065067,
  cy: 2661.529685,
  r: 79.241327
}, {
  cx: 3619.712058,
  cy: 2599.262960,
  r: 155.286460
}, {
  cx: 3597.781325,
  cy: 2613.172344,
  r: 77.966622
}, {
  cx: 3665.384457,
  cy: 2573.961805,
  r: 51.540319
}, {
  cx: 4065.358935,
  cy: 2659.337836,
  r: 109.628249
}, {
  cx: 4011.956392,
  cy: 2539.979194,
  r: 110.124883
}, {
  cx: 4003.864476,
  cy: 2615.389296,
  r: 90.026344
}, {
  cx: 3934.944415,
  cy: 2646.280953,
  r: 110.077695
}, {
  cx: 4333.106907,
  cy: 2607.579218,
  r: 108.114208
}, {
  cx: 4389.458137,
  cy: 2600.868002,
  r: 71.426920
}, {
  cx: 4466.413985,
  cy: 2591.647354,
  r: 108.814129
}, {
  cx: 4303.970669,
  cy: 2610.958730,
  r: 34.713115
}, {
  cx: 4718.317266,
  cy: 2675.721917,
  r: 93.464027
}, {
  cx: 4882.256030,
  cy: 2670.314519,
  r: 92.805942
}, {
  cx: 4800.653862,
  cy: 2672.984707,
  r: 26.571514
}, {
  cx: 4795.942544,
  cy: 2523.090771,
  r: 93.280594
}, {
  cx: 260.539312,
  cy: 2988.801681,
  r: 68.176167
}, {
  cx: 194.531201,
  cy: 2963.688575,
  r: 100.608483
}, {
  cx: 128.504711,
  cy: 2966.682363,
  r: 103.709055
}, {
  cx: 245.660119,
  cy: 3006.220063,
  r: 129.233619
}, {
  cx: 691.634474,
  cy: 3037.778500,
  r: 83.320038
}, {
  cx: 615.326139,
  cy: 2971.118877,
  r: 121.252995
}, {
  cx: 524.041350,
  cy: 3049.627764,
  r: 99.227572
}, {
  cx: 613.147356,
  cy: 2929.438041,
  r: 64.981952
}, {
  cx: 1002.926282,
  cy: 3066.185786,
  r: 108.618098
}, {
  cx: 1022.719596,
  cy: 2933.534816,
  r: 108.764489
}, {
  cx: 1005.360825,
  cy: 2998.725807,
  r: 64.187371
}, {
  cx: 975.484159,
  cy: 3057.853667,
  r: 107.533690
}, {
  cx: 1397.994655,
  cy: 2926.309350,
  r: 91.511044
}, {
  cx: 1483.330432,
  cy: 3069.028745,
  r: 91.580436
}, {
  cx: 1399.642484,
  cy: 3020.789998,
  r: 49.605745
}, {
  cx: 1316.673698,
  cy: 3071.661022,
  r: 91.914279
}, {
  cx: 1752.426385,
  cy: 2981.853687,
  r: 98.962244
}, {
  cx: 1813.680078,
  cy: 2999.027233,
  r: 60.084074
}, {
  cx: 1875.510266,
  cy: 3016.241220,
  r: 99.452708
}, {
  cx: 1678.947171,
  cy: 2962.955042,
  r: 54.250208
}, {
  cx: 2202.458620,
  cy: 3003.584611,
  r: 29.012951
}, {
  cx: 2201.811997,
  cy: 2929.842866,
  r: 100.977138
}, {
  cx: 2114.671538,
  cy: 3080.868014,
  r: 89.769217
}, {
  cx: 2288.891987,
  cy: 3077.162929,
  r: 86.327182
}, {
  cx: 2581.809325,
  cy: 3058.357509,
  r: 68.529288
}, {
  cx: 2493.574393,
  cy: 3019.999314,
  r: 68.915373
}, {
  cx: 2627.615891,
  cy: 2941.908665,
  r: 69.228535
}, {
  cx: 2705.590986,
  cy: 3040.746554,
  r: 69.282306
}, {
  cx: 2975.875052,
  cy: 2906.503531,
  r: 81.801064
}, {
  cx: 2905.552057,
  cy: 3019.956970,
  r: 79.626189
}, {
  cx: 3090.444986,
  cy: 2979.025967,
  r: 81.877128
}, {
  cx: 3017.080767,
  cy: 3093.333385,
  r: 81.719902
}, {
  cx: 3320.702305,
  cy: 2999.271588,
  r: 95.961640
}, {
  cx: 3400.285549,
  cy: 3022.648212,
  r: 27.652640
}, {
  cx: 3479.358693,
  cy: 2998.357833,
  r: 95.570968
}, {
  cx: 3400.272049,
  cy: 3010.588238,
  r: 18.071350
}, {
  cx: 3871.567527,
  cy: 2996.441957,
  r: 103.335235
}, {
  cx: 3777.308708,
  cy: 2984.043847,
  r: 56.254988
}, {
  cx: 3727.999653,
  cy: 3002.912572,
  r: 103.237277
}, {
  cx: 3794.359139,
  cy: 3010.731202,
  r: 30.605977
}, {
  cx: 4267.233630,
  cy: 3012.148642,
  r: 107.722857
}, {
  cx: 4184.945219,
  cy: 2997.344316,
  r: 70.179598
}, {
  cx: 4133.252880,
  cy: 2988.122085,
  r: 108.511797
}, {
  cx: 4215.502454,
  cy: 3002.836333,
  r: 69.808728
}, {
  cx: 4654.991831,
  cy: 3045.284135,
  r: 119.924969
}, {
  cx: 4597.482071,
  cy: 2951.216768,
  r: 120.434517
}, {
  cx: 4598.882741,
  cy: 3015.252803,
  r: 69.051377
}, {
  cx: 4544.448289,
  cy: 3047.770699,
  r: 119.670001
}, {
  cx: 4983.506369,
  cy: 2945.906018,
  r: 103.962673
}, {
  cx: 5056.712354,
  cy: 3000.950401,
  r: 118.353286
}, {
  cx: 5077.629747,
  cy: 2990.052181,
  r: 47.261060
}, {
  cx: 4912.858874,
  cy: 3068.812760,
  r: 88.048122
}, {
  cx: 449.274397,
  cy: 3346.973459,
  r: 7.721466
}, {
  cx: 464.043455,
  cy: 3289.709240,
  r: 65.033410
}, {
  cx: 514.428783,
  cy: 3352.782321,
  r: 59.519767
}, {
  cx: 353.302647,
  cy: 3446.376740,
  r: 128.637401
}, {
  cx: 805.499260,
  cy: 3324.618367,
  r: 93.836781
}, {
  cx: 804.945215,
  cy: 3337.214213,
  r: 94.828617
}, {
  cx: 885.314444,
  cy: 3477.689025,
  r: 89.770130
}, {
  cx: 715.777677,
  cy: 3472.714003,
  r: 90.855003
}, {
  cx: 1119.376321,
  cy: 3451.154100,
  r: 85.463515
}, {
  cx: 1201.333811,
  cy: 3490.488333,
  r: 84.516649
}, {
  cx: 1279.110550,
  cy: 3444.854559,
  r: 85.331131
}, {
  cx: 1193.840812,
  cy: 3309.914479,
  r: 85.230489
}, {
  cx: 1636.403298,
  cy: 3412.001487,
  r: 71.857137
}, {
  cx: 1712.008558,
  cy: 3454.367460,
  r: 62.799780
}, {
  cx: 1547.801127,
  cy: 3374.784124,
  r: 71.907844
}, {
  cx: 1479.309941,
  cy: 3336.573115,
  r: 54.577619
}, {
  cx: 2021.372639,
  cy: 3370.121334,
  r: 84.412391
}, {
  cx: 1982.746793,
  cy: 3430.121918,
  r: 84.195615
}, {
  cx: 2092.798100,
  cy: 3459.382620,
  r: 82.210976
}, {
  cx: 1908.950232,
  cy: 3340.946865,
  r: 84.057320
}, {
  cx: 2484.174493,
  cy: 3467.998987,
  r: 90.864876
}, {
  cx: 2402.757472,
  cy: 3330.781528,
  r: 90.907421
}, {
  cx: 2402.927973,
  cy: 3330.823456,
  r: 79.663061
}, {
  cx: 2314.988655,
  cy: 3463.035266,
  r: 90.187141
}, {
  cx: 2879.499137,
  cy: 3445.521471,
  r: 87.694605
}, {
  cx: 2720.529097,
  cy: 3454.326123,
  r: 87.597680
}, {
  cx: 2772.578280,
  cy: 3508.374416,
  r: 66.508247
}, {
  cx: 2792.197112,
  cy: 3312.398914,
  r: 87.567878
}, {
  cx: 3259.918452,
  cy: 3450.339051,
  r: 115.225868
}, {
  cx: 3215.008153,
  cy: 3383.670363,
  r: 149.745875
}, {
  cx: 3108.706973,
  cy: 3405.236305,
  r: 83.896152
}, {
  cx: 3261.286942,
  cy: 3335.085674,
  r: 41.345525
}, {
  cx: 3650.014816,
  cy: 3398.524517,
  r: 74.705999
}, {
  cx: 3549.771122,
  cy: 3400.429097,
  r: 124.825073
}, {
  cx: 3549.714035,
  cy: 3400.199473,
  r: 75.384356
}, {
  cx: 3650.452389,
  cy: 3398.497528,
  r: 124.558856
}, {
  cx: 3987.181155,
  cy: 3401.474075,
  r: 83.910220
}, {
  cx: 4031.516117,
  cy: 3397.284812,
  r: 54.932731
}, {
  cx: 4091.257482,
  cy: 3391.601812,
  r: 83.834690
}, {
  cx: 3908.739967,
  cy: 3407.450157,
  r: 83.808276
}, {
  cx: 4347.583898,
  cy: 3377.661631,
  r: 122.728564
}, {
  cx: 4450.007462,
  cy: 3419.606456,
  r: 124.938269
}, {
  cx: 4471.164249,
  cy: 3372.406545,
  r: 38.416245
}, {
  cx: 4427.217173,
  cy: 3471.048018,
  r: 34.362773
}, {
  cx: 4721.588157,
  cy: 3401.240683,
  r: 96.589526
}, {
  cx: 4826.329049,
  cy: 3398.472664,
  r: 109.578319
}, {
  cx: 4876.690313,
  cy: 3397.538255,
  r: 98.402615
}, {
  cx: 4773.882906,
  cy: 3399.750490,
  r: 109.249454
}];
/**
 * Finds the position of four circles from their index.
 * This index has range [0, 112), not [0, 448), so it needs to be multiplied
 * by four before indexing into rawData.
 */

function calcDataPosition(groupIndex) {
  // instead of breaking the index into alternating 12 and 13 column
  // rows right away, break it up into 25 column proto-rows first.
  var protoRow = Math.floor(groupIndex / 25);
  var protoColumn = groupIndex % 25; // the first 12 elements of a proto-row form a short row

  if (protoColumn < 12) {
    return {
      row: 2 * protoRow,
      column: protoColumn,
      shortRow: true
    }; // and the last 13 elements of a proto-row form a full-size row
  } else {
    return {
      row: 2 * protoRow + 1,
      column: protoColumn - 12,
      shortRow: false
    };
  }
}
/**
 * Returns a copy of a circle that has been translated to fit in the svg
 * viewbox (0 0 400 400). This index indexes an individual circle, not a
 * group of four.
 */


function normalize(circle, index) {
  var position = calcDataPosition(Math.floor(index / 4));
  var xOffset = 400 * position.column + (position.shortRow ? 200 : 0);
  var yOffset = 400 * position.row;
  return {
    cx: circle.cx - xOffset,
    cy: circle.cy - yOffset,
    r: circle.r
  };
}
/**
 * Mostly same as rawData, but modified so that every group of four circles
 * overlaps in the same spot instead of being spread out. This way we can
 * animate between them without worrying about their location.
 */


exports.data = rawData.map(normalize);
},{}],"src/svg.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function formatMove(path) {
  return "M " + path.x + " " + path.y + " ";
}

function formatArc(path) {
  var largeArcFlag = path.largeArcFlag ? 1 : 0;
  var sweepFlag = path.sweepFlag ? 1 : 0;
  return "A " + path.rx + " " + path.ry + " " + path.rotation + " " + largeArcFlag + "\n    " + sweepFlag + " " + path.x + " " + path.y + " ";
}

function formatCircle(path) {
  return formatMove(path[0]) + formatArc(path[1]) + formatArc(path[2]);
}

function circleToSvg(circle) {
  // 9 o'clock on the circle
  var entryPoint = {
    x: circle.cx - circle.r,
    y: circle.cy
  }; // 3 o'clock on the circle

  var midPoint = {
    x: circle.cx + circle.r,
    y: circle.cy
  };
  var defaultParams = {
    rx: circle.r,
    ry: circle.r,
    rotation: 0,
    largeArcFlag: false,
    sweepFlag: false
  };
  return [entryPoint, __assign(__assign({}, defaultParams), midPoint), __assign(__assign({}, defaultParams), entryPoint)];
}

function circleToD(circle) {
  return formatCircle(circleToSvg(circle));
}

exports.circleToD = circleToD;
},{}],"src/animation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var data_1 = require("./data");

var svg_1 = require("./svg");

function render(animation) {
  return animation.permutation.map(function (shuffledIndex, index) {
    var startCircle = data_1.data[4 * animation.startIndex + index];
    var endCircle = data_1.data[4 * animation.endIndex + shuffledIndex];
    var easeFunction = index % 2 ? sinEaseCircle : secEaseCircle;
    var circle = easeFunction(startCircle, endCircle, // add 0.5 to avoid infinite circles
    (animation.frame + 0.5) / animation.duration);
    return svg_1.circleToD(circle);
  }).join(' ');
}

exports.render = render;
/** Create a new random animation from a certain starting point */

function randAnimation(startIndex, duration) {
  var endIndex = Math.floor(data_1.data.length / 4 * Math.random());
  return {
    frame: 0,
    startIndex: startIndex,
    endIndex: endIndex,
    duration: duration,
    permutation: [3, 0, 1, 2]
  };
}

exports.randAnimation = randAnimation;
/**
 * Sinusoidal ease-in-out.
 * time ranges from 0 to 1.
 */

function sinEase(from, to, time) {
  var change = to - from;
  return change / 2 * (1 - Math.cos(Math.PI * time)) + from;
}
/**
 * Inverse easing based on secant.
 * If a < b, this function goes from a to -Infinity to +Infinity to b instead
 * of going from a to b.
 * Penalty is the amount of range to skip at the transition between infinities.
 * We need penalty to account for the padding from the radius when we ease the
 * circles' centers.
 */


function secEase(from, to, time, penalty) {
  var change = to - from;

  if (time < 0.5) {
    return sinEase(from, to - penalty, time) + change - change / Math.cos(Math.PI * time);
  } else if (time > 0.5) {
    return sinEase(from + penalty, to, time) - change - change / Math.cos(Math.PI * time);
  } else {
    return Infinity;
  }
}
/**
 * Loke secEase, but goes to +Infinity twice instead of alternating signs; for
 * situations where you need the absolute value of an easing function (eg for
 * radius).
 */
// TODO: Edge case to consider: amplitude can be 0 if distance is 0
// This wouldn't be a problem, but because of floating point math,
// distance might be 0 when dx or dy != 0 (eg if dx is so small that, when
// squared, becomes 0)


function absLogEase(from, to, time, amplitude) {
  amplitude = amplitude || to - from;

  if (time < 0.5) {
    return from - amplitude + amplitude / Math.cos(Math.PI * time);
  } else if (time > 0.5) {
    return to - amplitude - amplitude / Math.cos(Math.PI * time);
  } else {
    return Infinity;
  }
}

function sinEaseCircle(from, to, time) {
  return {
    cx: sinEase(from.cx, to.cx, time),
    cy: sinEase(from.cy, to.cy, time),
    r: sinEase(from.r, to.r, time)
  };
}

function secEaseCircle(from, to, time) {
  var distance = calcDistance(from, to);

  if (distance < 0.0002) {
    return sinEaseCircle(from, to, time);
  }

  var penalty = from.r + to.r;
  var costheta = (to.cx - from.cx) / distance;
  var sintheta = (to.cy - from.cy) / distance;
  return {
    cx: secEase(from.cx, to.cx, time, penalty * costheta),
    cy: secEase(from.cy, to.cy, time, penalty * sintheta),
    r: absLogEase(from.r, to.r, time, distance)
  };
}

function calcDistance(a, b) {
  var dx = a.cx - b.cx;
  var dy = a.cy - b.cy;
  return Math.sqrt(dx * dx + dy * dy);
}
},{"./data":"src/data.ts","./svg":"src/svg.ts"}],"src/script.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var animation_1 = require("./animation");

var $path = document.getElementById('path');
var ANIMATION_DURATION = 200;
var animation = animation_1.randAnimation(0, ANIMATION_DURATION);

function animateCircles() {
  $path.setAttribute('d', animation_1.render(animation));

  if (animation.frame < animation.duration) {
    animation.frame++;
  } else {
    animation.frame = 0;
    animation = animation_1.randAnimation(animation.endIndex, ANIMATION_DURATION);
  }

  requestAnimationFrame(animateCircles);
}

animateCircles();
},{"./animation":"src/animation.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51076" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/script.ts"], null)
//# sourceMappingURL=/script.66fca108.js.map