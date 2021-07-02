const valid = require('validator')
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');



yargs.command(
    {
        command : 'add',
        describe : 'Add a notes',
        
        
        builder:{
            title :{
                describe : 'Note title',
                demandOption :true,
                type : 'string'
                
            }
            ,
            body :{
                describe : 'Note body',
                demandOption :true,
                type : 'string'
                
            }
        },
        handler : function(argv){
            notes.addNote(argv.title,argv.body)
    }
}
)

yargs.command(
    {
        command : 'remove',
        describe : 'Remove a notes',
        builder : {
            title : 
            {
             describe : 'Note title',
            demandOption : true,
            type : 'string'
            }
        },
        handler(argv)
        {
            notes.removeNote(argv.title)
    }
    }
)

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read your notes',
    builder : {
        title : 
        {
         describe : 'Note title',
        demandOption : true,
        type : 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
yargs.parse()

