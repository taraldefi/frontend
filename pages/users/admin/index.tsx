import Layout from '@components/layouts/layout'
import Entity from '@components/entity/entity'
import React from 'react'

function index() {
    return (
        <Layout >
            <div className="entityContainer">
                <div className="entity">
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                    <Entity  />
                </div>
            </div>
        </Layout>
    )
}

export default index