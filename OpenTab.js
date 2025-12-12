(function(Scratch) {
    class OpenTab {
        getInfo() {
            return {
                id: "opentab",
                name: "Open Tab",
                color1: "#FFB300",
                blocks: [
                    {
                        opcode: "openTab",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "open tab [URL]",
                        arguments: {
                            URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://example.com" }
                        }
                    }
                ]
            };
        }

        openTab({ URL }) {
            window.open(URL, "_blank");
        }
    }

    Scratch.extensions.register(new OpenTab());
})(Scratch);
