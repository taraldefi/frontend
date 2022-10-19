import Layout from '@components/layouts/layout'
import NewLayoutNM from '@components/layouts/testLayoutNoMenue'
import { ApplicaitonTable } from '@components/widgets/table/applicationTable';
import React from 'react'
import { applicationTableType } from 'types/widget_table';
import { TableData } from './data';
function Index() {
    return (
        <NewLayoutNM>
            <ApplicaitonTable TableData={TableData}></ApplicaitonTable>
        </NewLayoutNM>
    )
}

export default Index