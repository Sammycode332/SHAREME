//First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

//Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import pin from './pin'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'

import { useSyncExternalStore } from 'react'

//then we give our schema to the builder and provide the result to 
export default createSchema({
    //we name our schema
    name:'default',
    // then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat({
      user, pin, comment, postedBy, save
    }),
})