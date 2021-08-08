<template>
    <main>
      <section class="page_survey pt-5">
        <div class="container">
            <div class="row">
                <!-- Search -->
                <!-- Filter -->
                <!-- Sort -->
                <!-- Create New Survey -->
            </div>
            <div class="row">
                <div class="col">
                  <table class="table table-hover table-dark table-borderless">
                    <tbody>
                        <tr>
                        <td><i>Preffered JavaScript Framework</i></td>
                        <td>Multiple Choice</td>
                        <td><span class="badge rounded-pill bg-primary">JavaSctript</span><span class="badge rounded-pill bg-primary">Vue</span><span class="badge rounded-pill bg-primary">React</span></td>
                        <td>47/&infin;</td>
                        <td class="text-success">🟢 active</td>
                        <td><button class="btn btn-gradient">RESPOND</button></td>
                        <td><button class="btn btn-gradient">RESULTS</button></td>
                        </tr>
                        <tr>
                        <td><i>Documentation Preferences</i></td>
                        <td>Survey</td>
                        <td><span class="badge rounded-pill bg-primary">Documentation</span><span class="badge rounded-pill bg-primary">Open Source</span></td>
                        <td>1000/1000</td>
                        <td class="text-danger text-muted">🔴 closed</td>
                        <td><button class="btn btn-gradient" disabled>RESPOND</button></td>
                        <td><button class="btn btn-gradient">RESULTS</button></td>
                        </tr>
                        <tr>
                        <td><i>Is HTML a programming Language?</i></td>
                        <td>Twitter Poll</td>
                        <td><span class="badge rounded-pill bg-primary">Opinion</span><span class="badge rounded-pill bg-primary">Debate</span><span class="badge rounded-pill bg-primary">Cringe</span></td>
                        <td>420/&infin;</td>
                        <td class="text-success">🟢 active</td>
                        <td><button class="btn btn-gradient">RESPOND</button></td>
                        <td><button class="btn btn-gradient">RESULTS</button></td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>
<style lang="scss">
.bg-primary {
    background-color: #530df8 !important;
}
.page_survey {
    tbody {
        padding: 3rem;
        @media(max-width: 992px){
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 0rem;
        }
    }
    tr {
        vertical-align: middle;
        text-align: left;
        td {
            padding-top: 1rem;
            padding-bottom: 1rem;
            &:first-of-type {
                padding-left: 2rem;
            }
            &:last-of-type {
                text-align: right;
                padding-right: 2rem;
            }
        }
        @media(max-width: 992px){
            display: flex;
            flex-direction: column;
            margin: .5rem 1rem;
            text-align: center;
            td {
                padding-top: 0rem;
                padding-bottom: 0rem;
                padding: .5rem;
                &:first-of-type {
                    padding-top: 2rem;
                    padding-left: .5rem;
                }
                &:last-of-type {
                    text-align: center;
                    padding-right: .5rem;
                    padding-bottom: 2rem;
                }
            }
        }
    }
}
</style>
