//
//  SwipeableCardViewDelegate.swift
//  Lux
//
//  Created by Dave Jha on 11/28/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import Foundation

protocol SwipeableCardViewDelegate: class {
    
    func didSelect(card: SwipeableCardViewCard, atIndex index: Int)
    
}
