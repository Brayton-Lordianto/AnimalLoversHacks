//
//  testScannerView.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import SwiftUI
import CodeScanner

struct testScannerView: View {
    let vm = ViewModel()
    @State var showSecond = false
    @State var echomodel: EchoModel? = nil
    
    var body: some View {
//        NavigationView {
            ZStack {
                NavigationLink("", destination: TestPickerView(echoModel: echomodel), isActive: $showSecond)
                CodeScannerView(codeTypes: [.qr], simulatedData: "some data") { result in
                    switch result {
                    case .failure(let error): print("DEBUG: Scanning failed: \(error.localizedDescription)")
                        
                    case .success(let result):
                        guard let id = result.string.components(separatedBy: "\n").first else { print("DEBUG: NOT FOUND ID FROM QR"); return }
                        print("DEBUG: FOUND ID \(id) FROM QRCODE")
                        echomodel = vm.echoModels.first(where: { $0.id == id })
                        showSecond.toggle()
                    }
                }
            }
            .navigationTitle("It's as easy as a QR!")
//        }
    }
}

struct qrView: View {
    var currentView: Binding<Int>
    var body: some View {
        CodeScannerView(codeTypes: [.qr], simulatedData: "some data") { result in
            switch result {
            case .failure(let error): print("DEBUG: Scanning failed: \(error.localizedDescription)")
                
            case .success(let result):
                let details = result.string.components(separatedBy: "\n")
                print(details)
            }
        }
    }
}

struct testScannerView_Previews: PreviewProvider {
    static var previews: some View {
        testScannerView()
    }
}
