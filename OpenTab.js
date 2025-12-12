(function(Scratch) {
    'use strict';

    class OpenTabExtension {
        getInfo() {
            return {
                id: 'opentab',
                name: 'Open Tab',
                color1: '##ffda00',
                blocks: [
                    {
                        opcode: 'openTab',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'open [URL] in new tab',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://frost307.itch.io'
                            }
                        }
                    }
                ]
            };
        }

        openTab(args) {
            window.open(args.URL, '_blank');
        }
    }

    Scratch.extensions.register(new OpenTabExtension());
})(Scratch);
