//
//  ContentView.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/5/22.
//

import SwiftUI
import RealityKit
//

struct ContentView : View {
    
    
    init() {
        //Use this if NavigationBarTitle is with Large Font
        UINavigationBar.appearance().largeTitleTextAttributes = [.foregroundColor: UIColor.green] 

        //Use this if NavigationBarTitle is with displayMode = .inline
        UINavigationBar.appearance().titleTextAttributes = [.foregroundColor: UIColor.green]
    }

    var body: some View {
//        return ARViewContainer().edgesIgnoringSafeArea(.all)
//        TestListAllView()
        NavigationView {
            VStack {
                NavigationLink {
                    testScannerView()
                } label: {
                    VStack {
                        textSquare()
                            .padding()
                            .padding(.top, 100)
                        
                        Text("Click to get started")
                            .fontWeight(.black)
                            .foregroundColor(.green)
                            .padding(.bottom, 40)
                    }
                }

                Form {
                    Section {
                        Button {
                            
                        } label: {
                            Text("Go to Website").foregroundColor(.green)
                        }

                    }
                    Button {
                        
                    } label: {
                        Text("Sign in to App").foregroundColor(.green)
                    }

                }
            }
            .navigationTitle("Pet Me")
            .background(NavigationConfigurator { nc in
                nc.navigationBar.titleTextAttributes = [.foregroundColor : UIColor.green]
            })
        }.tint(.green)

//        testScannerView()
    }
    
    func textSquare(val: Bool = true) -> some View {
        VStack {
            Image(systemName: "camera")
                .foregroundColor(.green)
                .padding(1)
            Text("Scan \nQR Code")
                .foregroundColor(.green)
                .font(.subheadline)
                .multilineTextAlignment(.center)
            
        }
        
            .background(
                Rectangle()
                    .fill(.thinMaterial)
                    .frame(width: 100, height: 100)
                    .cornerRadius(12).shadow(radius: 30)
            )
    }

}

struct ARViewContainer: UIViewRepresentable {
    
    func makeUIView(context: Context) -> ARView {
        
        let arView = ARView(frame: .zero)
        
        // Load the "Box" scene from the "Experience" Reality File
        let boxAnchor = try! Experience.loadBox()
        
        // Add the box anchor to the scene
        arView.scene.anchors.append(boxAnchor)
        
        return arView
        
    }
    
    func updateUIView(_ uiView: ARView, context: Context) {}
    
}

#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif

struct NavigationConfigurator: UIViewControllerRepresentable {
    var configure: (UINavigationController) -> Void = { _ in }

    func makeUIViewController(context: UIViewControllerRepresentableContext<NavigationConfigurator>) -> UIViewController {
        UIViewController()
    }
    func updateUIViewController(_ uiViewController: UIViewController, context: UIViewControllerRepresentableContext<NavigationConfigurator>) {
        if let nc = uiViewController.navigationController {
            self.configure(nc)
        }
    }

}
