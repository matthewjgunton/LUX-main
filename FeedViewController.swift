//
//  ViewController.swift
//  Lux
//
//  Created by Dave Jha on 11/18/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import UIKit
import BEMCheckBox

class FeedViewController: UIViewController, SwipeableCardViewDataSource {
    
    @IBOutlet weak var myCheckBox: BEMCheckBox!
    @IBOutlet private weak var swipeableCardView: SwipeableCardViewContainer!
        
        override func viewDidLoad() {
            super.viewDidLoad()
            swipeableCardView.dataSource = self
        }
        
    }
    
    // MARK: - SwipeableCardViewDataSource
    
    extension FeedViewController {
        
        func numberOfCards() -> Int {
            return viewModels.count
        }
        
        func card(forItemAtIndex index: Int) -> SwipeableCardViewCard {
            let viewModel = viewModels[index]
            let cardView = SampleSwipeableCard()
            cardView.viewModel = viewModel
            return cardView
        }
        
        func viewForEmptyCards() -> UIView? {
            return nil
        }
        
        func cardSwiped() {
            self.myCheckBox.setOn(true, animated: true)
           
        }
        
    }
    
    extension FeedViewController {
        
        var viewModels: [SampleSwipeableCellViewModel] {
            
           
            let acapella = SampleSwipeableCellViewModel(title: "Acapella Concert",
                                                     subtitle: "Acapella Group, Today",
                                                     color: UIColor(red:0.29, green:0.64, blue:0.96, alpha:1.0),
                                                     image: #imageLiteral(resourceName: "Acapella"))
            
            let jclecture = SampleSwipeableCellViewModel(title: "Jesus Christ lecture",
                                                     subtitle: "Lamberton, Today",
                                                     color: UIColor(red:0.29, green:0.63, blue:0.49, alpha:1.0),
                                                     image: #imageLiteral(resourceName: "Jesus Lecture"))
            
            let mixer = SampleSwipeableCellViewModel(title: "Freshmen Mixer",
                                                    subtitle: "Lehigh University, Today",
                                                    color: UIColor(red:0.69, green:0.52, blue:0.38, alpha:1.0),
                                                    image: #imageLiteral(resourceName: "Student Mixer"))
            
            let fratparty = SampleSwipeableCellViewModel(title: "Frat Party",
                                                         subtitle: "Frat, Today",
                                                         color: UIColor(red:0.96, green:0.81, blue:0.46, alpha:1.0),
                                                         image: #imageLiteral(resourceName: "Frat Party"))
            
            let concert = SampleSwipeableCellViewModel(title: "Bruno Mars Concert",
                                                         subtitle: "Bethlehem Steel Stacks, Today",
                                                         color: UIColor(red:0.96, green:0.81, blue:0.46, alpha:1.0),
                                                         image: #imageLiteral(resourceName: "bruno-mars"))
            
            let gala = SampleSwipeableCellViewModel(title: "Art Gala",
                                                       subtitle: "Zoellner Arts Center, Today",
                                                       color: UIColor(red:0.96, green:0.81, blue:0.46, alpha:1.0),
                                                       image: #imageLiteral(resourceName: "20150409-dallas-art-fair-preview-gala"))
            

            
            return [gala, concert, acapella, jclecture, mixer, fratparty]
        }
        
}


