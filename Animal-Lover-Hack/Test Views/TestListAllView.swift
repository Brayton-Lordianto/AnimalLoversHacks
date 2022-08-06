//
//  TestListAllView.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import SwiftUI

struct TestListAllView: View {
    var vm = ViewModel()
    var body: some View {
        NavigationView {
            List(vm.echoModels) { echomodel in
                Text(echomodel.name)
                Text(echomodel.filename)
                Text(echomodel.pathToDownloaded.description)
                Text(echomodel.description)
            }
            .onAppear {
                print(vm.echoModels.map { $0.id })
            }
        }
    }
}

struct TestListAllView_Previews: PreviewProvider {
    static var previews: some View {
        TestListAllView()
    }
}
