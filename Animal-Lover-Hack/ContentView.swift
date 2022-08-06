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
                            .navigationTitle("MyPets")
                            .padding()
                            .padding(.top, 100)
                        
                        Text("Click to get started")
                            .foregroundColor(.blue)
                            .padding(.bottom, 40)
                    }
                }

                Form {
                    Section {
                        Button("Go to Website") {}
                    }
                    Button("Sign in to App") {}
                }
            }
            .navigationTitle("MyPets")
        }

//        testScannerView()
    }
    
    func textSquare(val: Bool = true) -> some View {
        VStack {
            Image(systemName: "camera")
                .padding(1)
            Text("Scan \nQR Code")
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
