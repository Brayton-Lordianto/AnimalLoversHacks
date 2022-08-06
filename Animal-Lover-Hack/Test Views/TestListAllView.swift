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
            List(vm.echoModels, id: \.storageFileID) { echomodel in
                Text(echomodel.name)
                Text(echomodel.filename)
                Text(echomodel.pathToDownloaded.description)
                Text(echomodel.description)
            }
        }
    }
}

struct TestListAllView_Previews: PreviewProvider {
    static var previews: some View {
        TestListAllView()
    }
}
