// https://pytorch.org/docs/stable/nn.html



Blockly.Blocks["text_test"] = {
    init: function() {
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField("Hello World");
        this.setColour(0)
    }
}


Blockly.Blocks["model_define"] = {
    init: function() {
        this.setColour(BLOCK_COLORS.MODEL)
        this.appendDummyInput("Name").appendField("Model").appendField(new Blockly.FieldTextInput("Name"), "Name")
        this.appendStatementInput("Model").appendField()
    }
}

Blockly.Blocks["layer_linear"] = {
    init: function() {
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setColour(BLOCK_COLORS.LAYER)
        this.appendDummyInput().appendField("Linear")
        .appendField("Input").appendField(new Blockly.FieldNumber(), "Input")
        .appendField("Output").appendField(new Blockly.FieldNumber(), "Output")
        .appendField("Bias").appendField(new Blockly.FieldCheckbox(true), "Bias")
    }
}


Blockly.Blocks["activation_relu"] = {
    init: function() {
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setColour(BLOCK_COLORS.ACTIVATION)
        this.appendDummyInput().appendField("ReLU")
    }
}

Blockly.Blocks["activation_leaky_relu"] = {
    init: function() {
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setColour(BLOCK_COLORS.ACTIVATION)
        this.appendDummyInput().appendField("Leaky ReLU")
        .appendField("Negative Slope").appendField(new Blockly.FieldNumber(0.01),"Neg Slope")
    }
}

Blockly.Blocks["regularisation_dropout"] = {
    init: function() {
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setColour(BLOCK_COLORS.REGULARISATION)
        this.appendDummyInput().appendField("Dropout")
        .appendField("Probability").appendField(new Blockly.FieldNumber(0.5),"Probability")
    }
}

