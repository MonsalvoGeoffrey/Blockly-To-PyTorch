// https://developers.google.com/blockly/guides/get-started/web







let toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "TEST",
        "hidden": "true",
        "contents": [

          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "controls_repeat_ext"
          },
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "math_number"
          },
          {
            "kind": "block",
            "type": "math_arithmetic"
          },
          {
            "kind": "block",
            "type": "text"
          },
          {
            "kind": "block",
            "type": "text_print"
          },
          {
            "kind": "block",
            "type": "text_test"
          },
          {
            "kind": "block",
            "type": "model_define"
          },
          {
            "kind": "block",
            "type": "layer_linear"
          },

        ]
      },

      {
        "kind": "category",
        "name": "Model",
        "colour": String(BLOCK_COLORS.MODEL),
        "contents": [
          {
            "kind": "block",
            "type": "model_define"
          },
        ]
      },

      {
        "kind": "category",
        "name": "Layers",
        "colour": String(BLOCK_COLORS.LAYER),
        "contents": [
          {
            "kind": "block",
            "type": "layer_linear"
          },
        ]
      },

      {
        "kind": "category",
        "name": "Activation",
        "colour": String(BLOCK_COLORS.ACTIVATION),
        "contents": [
          {
            "kind": "block",
            "type": "activation_relu"
          },
          {
            "kind": "block",
            "type": "activation_leaky_relu"
          },
        ]
      },

    ]
}


let workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  move: {
    scrollbars: true,
    drag: true,
    wheel: false,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 0.8,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,

  },
  trashcan: true,
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
});
workspace.toolbox_.flyout_.autoClose = false



function updateCode(event) {
  let code = Blockly.Python.workspaceToCode(workspace);
  code = `import torch
import torch.nn as nn;

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

` + code
  
  let code_area = document.getElementById('codearea')
  code_area.innerHTML = code;
  hljs.highlightElement(code_area)
}
workspace.addChangeListener(updateCode);
updateCode()